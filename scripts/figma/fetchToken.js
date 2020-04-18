const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

import { logger } from '../../lib/helper/logger';

const figmaKey = process.env.FIGMA_FILE_KEY;
const figmaAPIToken = process.env.FIGME_PERSONAL_ACCESS_TOKEN;

const PATH = path.resolve(__dirname, '../../__temp__/figma.json');

const storeFile = data => fs.outputJson(PATH, data);

const getFigmaObjTree = async (figmaApiKey, figmaId) => {
  axios
    .get('https://api.figma.com/v1/files/' + figmaId, {
      headers: {
        'X-Figma-Token': figmaApiKey,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      let result = res.data; // figmaTreeStructure
      logger.info('caching figma data');

      storeFile(result);
    })
    .then(() => {
      logger.info('caching figma data done');
    })
    .catch(err => {
      logger.error(`caching figma data: ${logger.highlightError(err)}`);
    });
};

getFigmaObjTree(figmaAPIToken, figmaKey);
