const mysql = require('../lib/mysql');

class Area{
    constructor(){
        this.table = 'pasientes';
    }

    async getPatients(){
        const patients = await mysql.query(`SELECT * FROM ${this.table}`);
        return patients;
    }

    async getPatientById({ patientId }){
        const patient = await mysql.query(`SELECT * FROM ${this.table} WHERE id_pasiente=${patientId}`);
        return patient;
    }

    async createPatient({ patient }){
        const { firstName , lastName , phone , dni , alergy , state } = patient;
        await mysql.query(`INSERT INTO ${this.table} (nombre_pasiente, apellido_pasiente, telefono_pasiente, dni_pasiente, alergia, estado) VALUES(${firstName}, ${lastName}, ${phone}, ${dni}, ${alergy}, ${state})`);
    }

    async deletePatient({ patientId }){
        await mysql.query(`DELETE FROM ${this.table} WHERE id_pasiente=${patientId}`);
    }
}

module.exports = new Area();