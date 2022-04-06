const {Sequelize, Model, DataTypes}  = require('sequelize');
const sequelize = new Sequelize('Sqltest', 'root', 'Catdogfish13', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
});

User.create({
  name: 'elliott',
  email: 'elliott@example.org',
  password: '123',
  createdAt: null,
  updatedAt: null  
}).then((user) => {
  console.log(user);
});

module.exports = User;