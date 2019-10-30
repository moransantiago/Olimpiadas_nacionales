const Logger = require('../utils/logger');

module.exports = {
    emitAlarm: (io, globalIo, { type, area, location }) => {
        globalIo.of('/alarm').emit('trigger', {
            type,
            area,
            location
        })
    }
}