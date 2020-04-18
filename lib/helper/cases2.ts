export const toSnakeCase = (str: string): string => {
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
// This is not necessarily a good solution as the return value may be the wrong input
// this will warn the user if he uses TypeScript as well but it will not for JS -> bad api design
// false security !!

/* coming from

  typeof str === String &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(part => part.toLowerCase())
    .join('_');

*/
