const mysql = require('../lib/mysql');

class Area{
    constructor(){
        this.table = 'pasientes';
    }

    async getPatients(){
        const patients = await mysql.query(`SELECT * FROM ${this.table} WHERE estado_pasiente=1`);
        return patients;
    }

    async getPatientById({ patientId }){
        const [patient] = await mysql.query(`SELECT * FROM ${this.table} WHERE id_pasiente=${patientId} AND estado_pasiente=1`);
        return patient;
    }

    async createPatient({ patient }){
        const { nombre_pasiente , apellido_pasiente , telefono_pasiente , dni_pasiente , ubicacion_pasiente , alergia, estado } = patient;
        await mysql.query(`INSERT INTO ${this.table} (nombre_pasiente, apellido_pasiente, telefono_pasiente, dni_pasiente, ubicacion_pasiente, alergia, estado, estado_pasiente) VALUES("${nombre_pasiente}", "${apellido_pasiente}", "${telefono_pasiente}", "${dni_pasiente}", "${ubicacion_pasiente}", "${alergia}", "${estado}", 1)`);
    }

    async updatePatient({ patient, patientId }){
        const { nombre_pasiente , apellido_pasiente , telefono_pasiente , dni_pasiente , ubicacion_pasiente , alergia, estado } = patient;
        await mysql.query(`UPDATE ${this.table} SET nombre_pasiente="${nombre_pasiente}", apellido_pasiente="${apellido_pasiente}", telefono_pasiente="${telefono_pasiente}", dni_pasiente="${dni_pasiente}", ubicacion_pasiente="${ubicacion_pasiente}", alergia="${alergia}", estado="${estado}" WHERE id_pasiente=${patientId} AND estado_pasiente=1`);
        console.log({
            patient,
            patientId
        });
    }

    async deletePatient({ patientId }){
        await mysql.query(`UPDATE ${this.table} SET estado_pasiente='0' WHERE id_pasiente=${patientId}`);
    }
}

module.exports = new Area();