const socket = require('socket.io-client');
const Logger = require('../utils/logger');

const alarmConnection = socket.connect('http://localhost:4000/ws/alarm');

alarmConnection.on('connect', () => {
    console.log('Bindie el trigger');
    
    alarmConnection.on('trigger', (data) => {
        if(data.type === 'emergency'){
            Logger.error('Alarma activada', `Tipo de alarma: Emergencia - Area: ${data.area} - Ubicacion: ${data.location}`);
        }else if(data.type === 'normal'){
            Logger.warning('Alarma activada', `Tipo de alarma: Normal - Area: ${data.area} - Ubicacion: ${data.location}`);
        }
    });
});