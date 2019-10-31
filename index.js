const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const helmet = require('helmet');

const alarmRoute = require('./routes/alarm');
const areaRoute = require('./routes/area');
const authRoute = require('./routes/auth');
const patientsRoute = require('./routes/patients');
const reportsRoute = require('./routes/reports');
const usersRoute = require('./routes/users');
const triggerRoute = require('./routes/trigger');

const { bindAlarmEvents } = require('./sockets/alarm');

const { srvConfig } = require('./config');
const { clientErrorHandler, logErrors, errorHandler, wrapErrors } = require('./utils/middlewares/errorHandlers')

app.use(cors());
app.use(express.json());
app.use(cookieParser());
// app.use(helmet());

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use('/api/alarm', alarmRoute);
app.use('/api/auth', authRoute);
app.use('/api/patients', patientsRoute);
app.use('/api/reports', reportsRoute);
app.use('/api/users', usersRoute);
app.use('/api/areas', areaRoute);
triggerRoute(app, {io: io.of('/api/alarm'), globalIo: io});

bindAlarmEvents(io.of('/ws/alarm'));

// app.get('*', (req, res) => {
//   console.log('Quise devolver el frontend');
//   res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
// });

// Error Handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

server.listen(srvConfig.port, () => {
  console.log(`El server se ha iniciado en: http://localhost:${srvConfig.port || 4000}`);
});