/**
 *
 * @param  {...function} funcs - functions to compose
 *
 * compose(x, y) -> f(x(y))
 *
 * example:
 *
 * const example = compose(
 * val => { console.log(1); return `1<${val}>`; },
 * val => { console.log(2); return `2<${val}>`; },
 * );
 *
 * example('hello');
 *
 * output:
 * 2
 * 1
 * "1<2<hello>>"
);
 */
export const compose = (...fns) =>
  fns.reduce(
    (prevFn, nextFn) => (...args) => prevFn(nextFn(...args)),
    value => value
  );
