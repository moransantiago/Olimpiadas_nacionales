const myqsql = require('../lib/mysql');

myqsql.connection().query('Show tables');