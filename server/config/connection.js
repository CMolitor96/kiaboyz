require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.REACT_APP_DB_NAME,
    process.env.REACT_APP_DB_USER,
    process.env.REACT_APP_DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;