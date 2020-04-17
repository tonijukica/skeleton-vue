'use strict';

const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = {
  User: sequelize.import('./models/user')
};

const db = {
  sequelize,
  Sequelize,
  ...models
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
