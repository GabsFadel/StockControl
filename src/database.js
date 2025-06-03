const { PostgresDialect } = require('@sequelize/postgres');
const { Sequelize } = require('sequelize');
require('dotenv').config()

class Database {
    constructor() {
        this.init()
    }
    init() {
      this.db = new Sequelize({
        dialectOptions: process.env.DB_DIALECT_OPTIONS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        dialect: process.env.DB_DIALECT,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      })
    }
}

module.exports = new Database()