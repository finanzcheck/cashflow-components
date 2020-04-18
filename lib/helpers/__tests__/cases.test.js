import { toSnakeCase } from '../cases';

const wrongInputs = [false, true, undefined, null, {}, [], ''];

const inputs = [
  'foobar',
  'FooBarFoo',
  'foo_bar',
  'fooBar_foo-bar',
  'FOObar-BazBing_BOO',
  'fooBar',
  'foo-bar',
  'Foo bar',
  'Foo Bar',
  'FOO BAR',
  'fooBar baz',
];

const outputs = [
  'foobar',
  'foo_bar_foo',
  'foo_bar',
  'foo_bar_foo_bar',
  'fo_obar_baz_bing_boo',
  'foo_bar',
  'foo_bar',
  'foo_bar',
  'foo_bar',
  'foo_bar',
  'foo_bar_baz',
];

const wrongInputsTable = wrongInputs.map(input => [input, '']);
const testTable = inputs.map((str, i) => [str, outputs[i]]);

describe('toSnakeCase()', () => {
  test.each(wrongInputsTable)(
    'given wrong input "%s" returns empty string',
    (input, expected) => {
      expect(toSnakeCase(input)).toBe(expected);
    },
  );

  test.each(testTable)('given "%s" returns "%s"', (input, expected) => {
    expect(toSnakeCase(input)).toBe(expected);
  });
});
