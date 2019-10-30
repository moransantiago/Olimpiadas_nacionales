const mysql = require('mysql');
const { dbConfig } = require('../config');

class MySQL{
    constructor(){
        this.client = mysql.createPool({
            host: dbConfig.dbHost,
            port: dbConfig.dbPort,
            user: dbConfig.dbUser,
            password: dbConfig.dbPassword,
            database: dbConfig.dbName
        });
    }
}

module.exports = new MySQL();