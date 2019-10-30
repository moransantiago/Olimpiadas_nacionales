const mysql = require('mysql');
const { dbConfig } = require('../config');

class MySQL{
    constructor(){
        this.client = mysql.createConnection({
            host: dbConfig.dbHost,
            port: dbConfig.dbPort,
            user: dbConfig.dbUser,
            password: dbConfig.dbPassword,
            database: dbConfig.dbName
        });
    }

    connection(){
        this.client.connect((err) => {
            if(err){
                console.log(err);
                return err;
            }
        });

        console.log(this.client);
        return this.client;
    }
}

module.exports = new MySQL();