// inspired by https://github.com/figma/figma-api-demo/blob/master/figma-to-react/lib/figma.js
import fetch from 'node-fetch';
import fs from 'fs-extra';
import path from 'path';

import { logger } from '../../lib/helper/logger';

const figmaKey = process.env.FIGMA_FILE_KEY;
const figmaAPIToken = process.env.FIGME_PERSONAL_ACCESS_TOKEN;
const baseUrl = 'https://api.figma.com';
const TEMP_PATH = '../../__temp__';
const IMAGE_PATH = `${TEMP_PATH}/images`;
const CACHE_PATH = path.resolve(__dirname, `${TEMP_PATH}/figma.json`);

const formats = [{ format: 'svg' }, { format: 'png', scale: '2' }];

const headers = new fetch.Headers();
headers.append('X-Figma-Token', figmaAPIToken);

const cacheFile = async (url, pathName) => {
  logger.wait(`cache file from ${url}`);
  await fetch(url).then(res => {
    const dest = fs.createWriteStream(pathName);
    res.body.pipe(dest);
    logger.event(`cache file done`);
  });
};

/**
 * Fetch component images and cache them
 * @param {string} filePath file path without traling slash
 * @param {object} images
 * @param {string} images.id component id
 * @param {string} images.name file name
 * @param {object} params
 * @param {string} params.format file format svg|png
 * @param {string|number} [params.scale] scale for png
 * @returns {void}
 */
async function cacheComponentImages(filePath, images, params) {
  const paramsString = Object.keys(params).reduce((string, key) => {
    return (string += `&${key}=${params[key]}`);
  }, '');

  const ids = images.map(image => image.id).join(',');

  const imagesPaths = images.reduce((state, image) => {
    state[image.id] = path.resolve(
      __dirname,
      `${filePath}/${image.name}.${params.format}`,
    );
    return state;
  }, {});

  const imagesResponse = await fetch(
    `${baseUrl}/v1/images/${figmaKey}?ids=${ids}${paramsString}`,
    {
      headers,
    },
  )
    .then(res => {
      return res.json();
    })
    .then(json => {
      if (json.status) {
        throw new Error(json.err);
      }
      return json.images || {};
    })
    .catch(err => {
      logger.error(`fetch: ${logger.highlightError(err)}`);
      return {};
    });

  return Promise.all(
    Object.keys(imagesResponse).map(id =>
      cacheFile(imagesResponse[id], imagesPaths[id]),
    ),
  );
}

logger.info('fetching images');
fs.readJson(CACHE_PATH)
  .then(json => {
    if (!json.components || Object.keys(json.components).length === 0) {
      logger.warn('no components to handle');
      return null;
    }

    const components = Object.keys(json.components).map(key => {
      return {
        id: key,
        name: json.components[key].name,
      };
    });

    return Promise.all(
      formats.map(format =>
        cacheComponentImages(IMAGE_PATH, components, format),
      ),
    );
  })
  .then(() => {
    logger.info('fetching images done');
  })
  .catch(err => {
    logger.error(`read cache: ${logger.highlightError(err)}`);
  });
