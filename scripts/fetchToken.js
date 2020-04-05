const axios = require('axios');

// https://www.figma.com/file/:key/:title
const getEndpoint =
  'https://www.figma.com/file/tpwhHRfoXMkzuFIYE9becy/CashFlow-Code?node-id=0%3A1';

/*
curl -H 'X-FIGMA-TOKEN: process.env.FIGME_PERSONAL_ACCESS_TOKEN' 'https://api.figma.com/v1/files/tpwhHRfoXMkzuFIYE9becy'
  */

const figmaKey = 'tpwhHRfoXMkzuFIYE9becy'; // TODO: put to env
const figmaAPIToken = process.env.FIGME_PERSONAL_ACCESS_TOKEN;

async function getFigmaObjTree(figmaApiKey, figmaId) {
  axios
    .get('https://api.figma.com/v1/files/' + figmaId, {
      headers: {
        'X-Figma-Token': figmaApiKey,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      let result = res.data;
      console.log('result', result);
    })
    .catch((err) => {
      console.log('errors');
      console.log(err);
    });
}
getFigmaObjTree(figmaAPIToken, figmaKey);
