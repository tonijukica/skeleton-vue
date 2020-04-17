require('dotenv').config();
const path = require('path');

module.exports = {
  config: path.join(__dirname, './server/database/config.js'),
  modelsPath: path.join(__dirname, './server/database/models'),
  seedersPath: path.join(__dirname, './server/database/seeds'),
  migrationsPath: path.join(__dirname, './server/database/migrations')
};
