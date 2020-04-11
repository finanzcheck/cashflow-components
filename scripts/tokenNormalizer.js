import fs from 'fs-extra';
import path from 'path';

import { applyMiddlewares } from '../lib/helpers/middleware';
import * as colorsSchema from './schema/colorsSchema';

const PATH = path.resolve(__dirname, '../__temp__/figma.json');

const schemaList = {
  [colorsSchema.name]: normalizeWithMiddlewares(colorsSchema),
};

const schemaKeys = Object.keys(schemaList);

/**
 * Apply middlewares to the normalize function of a schema
 *
 * Returns a new normalize function, which when called applies all middlewares
 * defined for that schema.
 *
 * @param {object} schema - The schema object
 * @param {string} schema.name - Name of the schema
 * @param {Function[]} schema.middlewares - Schema's middlewares
 * @param {Function} schema.normalize - Schema's normalize function
 * @returns {Function}
 */
function normalizeWithMiddlewares(schema) {
  return applyMiddlewares(schema.normalize, schema.middlewares);
}

/**
 * applies schema if available
 *
 * @param {string} name
 * @param {object} item raw data from figma
 */
function applyCorrespondingSchema(name, item) {
  if (schemaKeys.includes(name)) {
    return schemaList[name](item);
  }

  // NOTE: no schema available
  return null;
}

// TODO: globals and aliases are ignored for now - how to set them up in figma if needed? talk to UX
const normalize = rawData => {
  // TODO: is there only one canvas?
  const canvas = rawData.document.children[0];
  const frames = canvas.children.filter(child => child.type === 'FRAME');

  return frames.reduce((state, frame) => {
    const schemaName = frame.name;

    const props = frame.children.reduce((state, child) => {
      const result = applyCorrespondingSchema(schemaName, child);

      if (result) {
        return {
          ...state,
          [result.name]: { ...result.properties },
        };
      }

      return state;
    }, {});

    return {
      props: {
        ...state.props,
        ...props,
      },
    };
  }, {});
};

const TOKEN_PATH = path.resolve(__dirname, '../tokens/json/figma.json');
const storeFile = fields => fs.outputJson(TOKEN_PATH, fields);

// TODO: combine in a generate script that fetches and normalizes
fs.readJson(PATH)
  .then(json => {
    storeFile(normalize(json));
  })
  .catch(err => {
    console.error(err);
  });
