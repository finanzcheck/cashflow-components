module.exports = {
  extends: ['prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest', 'import', 'prettier'],
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      tsx: true,
    },
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: 'eslint:recommended',
  rules: {
    // Disallow the use of console
    'no-console': 'error',
  },
};
