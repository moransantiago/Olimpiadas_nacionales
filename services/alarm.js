const mysql = require('../lib/mysql');

class Alarm{
    constructor(){
        this.table = 'alarmas';
    }

    async getAlarms(){
        const alarms = await mysql.query(`SELECT * FROM ${this.table}`);
        return alarms;
    }

    async getAlarmById(alarmId){
        const alarm = await mysql.query(`SELECT * FROM ${this.table} WHERE id_alarma=${alarmId}`);
        return alarm;
    }

    async createAlarm(area, location){
        await mysql.query(`SELECT * FROM ${this.table} WHERE id_alarma=${alarmId}`);
    }
}

module.exports = new Alarm();