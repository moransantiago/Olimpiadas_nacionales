const Logger = require('../utils/logger');

module.exports = {
    bindAlarmEvents: (io) => {
        io.on('connection', (socket) => {
            Logger.succesfull('Alarm connected', 'A new alarm has been connected!');
        });
    },
    emitAlarm: (io, globalIo, { type, area, location }) => {
        globalIo.of('/ws/alarm').emit('trigger', {
            type,
            area,
            location
        });
    }
}