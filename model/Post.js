const {Sequelize, Model, DataTypes}  = require('sequelize');
const sequelize = new Sequelize('Sqltest', 'root', 'Catdogfish13', {
  host: 'localhost',
  dialect: 'mysql',
});

const Post = sequelize.define('Post', {
  // Model attributes are defined here
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body:{
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  // Other model options go here
});

module.exports = Post;