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

    query(query){
        return new Promise((res, rej) => {
            this.client.query(query, (err, result) => {
                if(err){
                  rej(err);
                }
                
                res(result)
            })
        });
    }
}

module.exports = new MySQL();