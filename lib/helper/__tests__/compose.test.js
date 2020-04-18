import { compose } from "../compose";

test("compose composes from right to left", () => {
  expect.assertions(3);

  const double = x => x * 2;
  const square = x => x * x;

  expect(compose(square)(5)).toBe(25);
  expect(compose(square, double)(5)).toBe(100);
  expect(compose(double, square, double, double)(5)).toBe(800);
});

test("compose can be seeded with multiple arguments", () => {
  expect.assertions(1);

  const square = x => x * x;
  const add = (x, y) => x + y;
  expect(compose(square, add)(1, 2)).toBe(9);
});

test("compose returns the identity function if given no arguments", () => {
  expect.assertions(3);
  expect(compose()(1, 2)).toBe(1);
  expect(compose()(3)).toBe(3);
  expect(compose()()).toBeUndefined();
});

test("compose returns the first function if given only one", () => {
  expect.assertions(1);
  const fn = x => x * x;
  expect(compose(fn)(3)).toBe(fn(3));
});
