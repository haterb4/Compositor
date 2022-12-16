const { Sequelize } = require('sequelize');
const sequelize = require("../database")

const User = sequelize.define('User', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    connectionState:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
    }
},{
    timestamps:false,
    freezeTableName: true,
})

module.exports = User;