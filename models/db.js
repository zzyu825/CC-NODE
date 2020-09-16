const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('myschooldb', 'root', '950825', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: null
});

module.exports = {
  sequelize,
  DataTypes
};