const mysql = require('../lib/mysql');

class Area{
    constructor(){
        this.table = 'reportes';
    }

    async getReports(){
        const patients = await mysql.query(`SELECT * FROM ${this.table}`);
        return patients;
    }

    async getReportById({ reportId }){
        const patient = await mysql.query(`SELECT * FROM ${this.table} WHERE id_area=${reportId}`);
        return patient;
    }

    async createReport({ patient }){
        const { firstName , lastName , phone , dni , alergy , state } = patient;
        await mysql.query(`INSERT INTO ${this.table} (nombre_pasiente, apellido_pasiente, telefono_pasiente, dni_pasiente, alergia, estado) VALUES(${firstName}, ${lastName}, ${phone}, ${dni}, ${alergy}, ${state})`);
    }

    async deleteReport({ patientId }){
        await mysql.query(`DELETE FROM ${this.table} WHERE id_pasiente=${patientId}`);
    }
}

module.exports = new Area();