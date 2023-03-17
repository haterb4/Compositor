const {Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("../database")

class Notion extends Model {}

Notion.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: 'Notion',
    timestamps: false,
})

module.exports = Notion