const mysql = require('../lib/mysql');

class Area{
    constructor(){
        this.table = 'areas';
    }

    async getAreas(){
        const alarms = await mysql.query(`SELECT * FROM ${this.table}`);
        return alarms;
    }

    async getAlarmById(alarmId){
        const alarm = await mysql.query(`SELECT * FROM ${this.table} WHERE id_alarma=${alarmId}`);
        return alarm;
    }

    async createAlarm(area, location){
        await mysql.query(`INSERT INTO ${this.table}(tipo_alarma, ubicacion, area_alarma) VALUES()`);
    }
}

module.exports = new Area();