import fetch from 'node-fetch';
import fs from 'fs-extra';
import path from 'path';

const figmaKey = 'tpwhHRfoXMkzuFIYE9becy'; // TODO: put to env
const figmaAPIToken = process.env.FIGME_PERSONAL_ACCESS_TOKEN;
const baseUrl = 'https://api.figma.com';
const IMAGEE_PATH = '../../__temp__/images';

// inspired by https://github.com/figma/figma-api-demo/blob/master/figma-to-react/lib/figma.js
const ids = ['29:22'].join(','); // hard coded component id

const headers = new fetch.Headers();
headers.append('X-Figma-Token', figmaAPIToken);

async function writeFile(name, data) {
  const filePath = path.resolve(__dirname, `${IMAGEE_PATH}/${name}`);
  await fs.ensureDir(path.resolve(__dirname, `${IMAGEE_PATH}/`));

  return fs.writeFile(filePath, data);
}

const fetchFile = async (url, pathName) => {
  console.log('[fetching]', url);
  await fetch(url).then(res => {
    const dest = fs.createWriteStream(pathName);
    res.body.pipe(dest);
    console.log('[fetching] DONE');
  });
};

async function fetchSVG() {
  let data = await fetch(
    `${baseUrl}/v1/images/${figmaKey}?ids=${ids}&format=svg`,
    {
      headers,
    },
  );

  const imageJSON = await data.json();
  // imageJSON example:
  // {
  //   err: null,
  //   images: {
  //     '29:22': 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f92c/9ac0/920895cfb2ca2c2c315a5e323fc48a7a'
  //   }
  // }

  const images = imageJSON.images || {};
  const SVG_PATH = path.resolve(
    __dirname,
    '../../__temp__/images/top_zins.svg',
  );

  await fetchFile(images['29:22'], SVG_PATH);
  console.log('svg DONE');
}

async function fetchPNG() {
  const params = {
    format: 'png',
    scale: '2',
  };

  const paramsString = Object.keys(params).reduce((string, key) => {
    return (string += `&${key}=${params[key]}`);
  }, '');

  let data = await fetch(
    `${baseUrl}/v1/images/${figmaKey}?ids=${ids}${paramsString}`,
    {
      headers,
    },
  );

  const imageJSON = await data.json();
  // imageJSON example:
  // {
  //   err: null,
  //   images: {
  //     '29:22': 'https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f92c/9ac0/920895cfb2ca2c2c315a5e323fc48a7a'
  //   }
  // }

  const images = imageJSON.images || {};
  const PNG_PATH = path.resolve(
    __dirname,
    '../../__temp__/images/top_zins.png',
  );

  fetch(images['29:22']).then(res => {
    const dest = fs.createWriteStream(PNG_PATH);
    res.body.pipe(dest);
    console.log('....');
  });

  console.log(': image written :');
}

fetchSVG();
// fetchPNG();
