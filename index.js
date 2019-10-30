const express = require('express')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const helmet = require('helmet');

const alarmRoute = require('./routes/alarm');
const authRoute = require('./routes/auth');
const patientsRoute = require('./routes/patients');
const reportsRoute = require('./routes/reports');
const usersRoute = require('./routes/users');

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

// mysql.client.query("SELECT * FROM usuarios", (err, result) => {
//     if(err){
//       console.log("");
//       console.log(err);
//       return;
//     }

//     console.log(result);
// })