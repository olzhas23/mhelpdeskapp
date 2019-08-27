const Sequelize = require('sequelize');

Sequelize.Model.sync();
module.exports = new Sequelize('TestApp', 'sa', 'BlueOcean1234#', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: false,
  },
  timestamps: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
