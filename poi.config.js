'use strict';
const path = require('path');

const port = process.env.SERVER_PORT;
const serverUrl = `http://127.0.0.1:${port}`;

const aliases = {
  '@': path.resolve(__dirname, './client'),
  client: '@',
  assets: '@/assets',
  components: '@/components',
};

const devServer = {
  proxy: {
    '/api': {
      target: serverUrl,
      ws: true,
      changeOrigin: true
    }
  }
}
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
  devServer,
  chainWebpack(config) {
    config.resolve.alias.merge(aliases);
    config.resolve.extensions.merge(extensions);
  },
};
