import { compose } from "./compose";

export const applyMiddlewares = (func, middlewares) => {
  return compose(...middlewares)(func);
};
