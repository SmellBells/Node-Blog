const {Sequelize, DataTypes}  = require('sequelize');
const sequelize = new Sequelize('Sqltest', 'root', 'Catdogfish13', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;