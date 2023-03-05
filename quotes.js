const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'quotes.sqlite'
})

module.exports = {
    Quotes: sequelize.define('quotes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quote: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    })
}
