const mysql = require('../lib/mysql');
const { emitAlarm } = require('../sockets/alarm');

class Alarm{
    constructor(){
        this.table = 'alarmas';
    }

    async getAlarms(){
        const alarms = await mysql.query(`SELECT * FROM ${this.table}`);
        return alarms;
    }

    async getAlarmById({alarmId}){
        const alarm = await mysql.query(`SELECT * FROM ${this.table} WHERE id_alarma=${alarmId}`);
        return alarm;
    }

    async createAlarm({ type, area, location }){
        await mysql.query(`INSERT INTO alarmas (tipo_alarma, ubicacion, area_alarma) VALUE ('${type}', '${location}', '${area}')`);
    }

    notifyAlarms(alarmIo, globalIo, { type, area, location }){
        emitAlarm(alarmIo, globalIo, { type, area, location });
    }
}

module.exports = new Alarm();