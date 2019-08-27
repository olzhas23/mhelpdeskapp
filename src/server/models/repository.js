const Sequelize = require('sequelize');
const db = require('../config/database');
Sequelize.Model.sync();
const Repository =db.define('Repositories',{
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        notEmpty: true
    },
    name: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    stars: {
        type: Sequelize.INTEGER,
        notEmpty: true
    },
    },{
        timestamps: false
    }); 
   
module.exports =  Repository;