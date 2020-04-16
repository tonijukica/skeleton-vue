'use strict';
const path = require('path');

const aliases = {
  '@': path.resolve(__dirname, './client'),
  client: '@',
  assets: '@/assets',
  components: '@/components',
};

const extensions = ['.vue'];

module.exports = {
  plugins: [
    '@poi/bundle-report',
  ],
  entry: {
    app: 'client/main.js'
  },
  output: {
    dir: 'dist'
  },
  chainWebpack(config) {
    config.resolve.alias.merge(aliases);
    config.resolve.extensions.merge(extensions);
  },
};
