// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('@tcd-devkit/prettier-config-react');

/** @type {import('prettier').Config} */
module.exports = {
  ...config,
  tailwindStylesheet: 'src/app/globals.css',
};
