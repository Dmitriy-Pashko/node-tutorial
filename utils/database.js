const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "0025557l", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
