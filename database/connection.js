const Sequelize = require('sequelize')

const sequelize = new Sequelize('socialnetwork', 'root', 'akashsengar', { host: '127.0.0.1', dialect: 'mysql' })

module.exports = sequelize
