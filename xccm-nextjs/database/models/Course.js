const {Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("../database")

class Course extends Model {}

Course.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    folder:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: 'Course',
    timestamps: true,
})

module.exports = Course