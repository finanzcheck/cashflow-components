const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

import { logger } from '../../lib/helper/logger';

// https://github.com/mikaelvesavuori/figmagic/tree/master/bin/functions
// https://www.figma.com/file/K39TRbltDVcWFlpzw9r7Zh/Figmagic-%E2%80%94-Design-System-for-Tokens?node-id=2605%3A12

// from article https://www.figma.com/file/JfZz46bVQzUA2TTtoSnhnG/Ishan(deisgn-token)?node-id=5%3A19

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
      // on result is the information about the last changed date -> compare with a cached one
      // console.log(result.document.children[0].children); // the frames
      // console.log(result.document.children[0].children[1]); // type
      // const x = fs.outputJson(path.resolve(PATH, `figma.json`), result);
      logger.info('caching figma data');

      // TODO: compare result.version: "288287639" in response to the version stored to prevent unnecessary steps
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
