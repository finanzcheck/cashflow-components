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

// GET/v1/files/:file_key/components - Get metadata on a component by key
// https://www.figma.com/plugin-docs/api/properties/nodes-exportasync/

// some helpful methods https://github.com/figma/figma-api-demo/blob/master/figma-to-react/lib/figma.js

/*
// TODO: normalize ->
document -> children(CANVAS) -> children(FRAME.name -> colors, text, etc.) -> children -> [{}]
  id
  name
  characters -> (actual text)
  styles -> { fill: styleId }
  fills -> color -> rgb: 255 * value each

  e.g. name= SPACING -> children[x].name = 'huge' -> absoluteBoundingBox.widht|height
  FRAME-NAME === type of normilization -> child-NAME === styleName value === fill|absoluteBoundingBox|style|...
}]

//  styles -> [{ styleId -> type, name, no values }] ?? usable ??

Goal:
"font_small": {           -> FRAMAE.name + '_' + CHILD.name
  "value": "12",          -> needs selector
  "type": "size",         -> needs mapping
  "category": "sizing",   -> needs mapping
  "meta": {               -> ?? needed ?? how to use in Figma?
    "unit": "px"
  }
}

style from document example:
"lineHeightPx": 18.75,
"lineHeightPercent": 100,
-> needs translation to proper CSS -> meta could be used

Questions:
- what are team cmoponents?
- how to use styles sub-object?
- what categories does Theo have? -> https://github.com/salesforce-ux/theo#supported-categories
*/

// https://www.figma.com/developers/api#library-items
// https://blog.prototypr.io/design-tokens-with-figma-aef25c42430f
// https://www.figma.com/file/tpwhHRfoXMkzuFIYE9becy/CashFlow-Code?node-id=0%3A1
