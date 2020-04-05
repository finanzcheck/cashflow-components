const axios = require('axios');

// https://github.com/mikaelvesavuori/figmagic/tree/master/bin/functions
// https://www.figma.com/file/K39TRbltDVcWFlpzw9r7Zh/Figmagic-%E2%80%94-Design-System-for-Tokens?node-id=2605%3A12

// from article https://www.figma.com/file/JfZz46bVQzUA2TTtoSnhnG/Ishan(deisgn-token)?node-id=5%3A19

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
      // on result is the information about the last changed date -> compare with a cached one
      // console.log(result.document.children[0].children); // the frames
      console.log(result.document.children[0].children[1]); // type
    })
    .catch((err) => {
      console.log('errors');
      console.log(err);
    });
}
getFigmaObjTree(figmaAPIToken, figmaKey);
