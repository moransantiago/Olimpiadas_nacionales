const express = require('express')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const helmet = require('helmet');

// Borrar
const mysql = require('./lib/mysql');

const { srvConfig } = require('./config');

const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser());
// app.use(helmet());

app.use(express.static(path.join(__dirname, 'frontend/build')));



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const server = app.listen(srvConfig.port, () => {
  console.log('Server has been initialized on http://localhost:' + server.address().port);
});

mysql.connection().query("CREATE TABLE a (PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255) )", (err, result) => {
    if(err){
        console.log(err);
    }

    console.log(result);
})