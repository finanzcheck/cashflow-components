// inspired by https://medium.com/javascript-in-plain-english/convert-string-to-different-case-styles-snake-kebab-camel-and-pascal-case-in-javascript-da724b7220d7

export const toSnakeCase = str =>
  // this change was found due to tests written
  typeof str === 'string' && str.length > 0
    ? str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        .map(part => part.toLowerCase())
        .join('_')
    : '';

/* coming from

  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(part => part.toLowerCase())
    .join('_');

*/
