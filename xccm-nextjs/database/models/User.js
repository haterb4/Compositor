const {Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("../database")

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: 'User',
    timestamps: false,
})

module.exports = User