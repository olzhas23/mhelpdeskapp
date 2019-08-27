const Sequelize = require('sequelize');
const db = require('../config/database');
Sequelize.Model.sync();
const Template =db.define('Template',{
    title: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        notEmpty: true
    },
    subtitle: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    isActive: {
        type: Sequelize.INTEGER,
        notEmpty: true
    },
    },{
        timestamps: false
    }); 
   
module.exports =  Template;