import { toSnakeCase } from '../../lib/helper/cases';

const name = 'Color';
const middlewares = [];

const RGB_MAX = 255;
const calc = value => Math.round(RGB_MAX * value);

// to convert color to hex https://coding.tools/rgba-to-hex
const getColor = item =>
  `rgba(${calc(item.r)}, ${calc(item.g)}, ${calc(item.b)}, ${item.a})`;

const schema = {
  name: item => toSnakeCase(`${name}_${item.name}`),
  properties: item => ({
    value: getColor(item.fills[0].color),
    type: 'color',
    category: 'background-color',
  }),
};

// TODO: each should be it's own schema - naming convention with UX needed
// category: text-color | background-color | border-color

const normalize = item => ({
  name: schema.name(item),
  properties: schema.properties(item),
});

export { name, middlewares, normalize };
