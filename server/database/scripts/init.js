const db = require('../index');

db.sequelize.sync({force: true}).then(() => {
  console.log("Init DB");
  Promise.resolve();
}).then(() => db.sequelize.close());
