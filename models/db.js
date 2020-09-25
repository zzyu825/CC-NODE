const { Sequelize, DataTypes } = require('sequelize');
const { sqlLogger } = require("../logger");

const sequelize = new Sequelize('myschooldb', 'root', '950825', {
  host: 'localhost',
  dialect: 'mysql',
  logging: msg => {
    sqlLogger.debug(msg);
  }
});

module.exports = {
  sequelize,
  DataTypes
};