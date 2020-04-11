export const toSnakeCase = (str: String) => {
  const matched =
    str &&
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    );

  if (matched) {
    return matched.map(part => part.toLowerCase()).join('_');
  }
  return str;
};

/* coming from

  typeof str === String &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(part => part.toLowerCase())
    .join('_');

*/
