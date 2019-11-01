const mysql = require('../lib/mysql');

class Nurse{
    constructor(){
        this.table = 'enfermeros';
    }

    async getNurses(){
        const areas = await mysql.query(`SELECT * FROM ${this.table} WHERE estado_enfermero='1'`);
        return areas;
    }

    async getNurseById({ nurseId }){
        const [enfermero] = await mysql.query(`SELECT * FROM ${this.table} WHERE id_enfermero=${nurseId} AND estado_enfermero='1'`);
        return enfermero;
    }

    async getNurseByName({ areaName }){
        const enfermero = await mysql.query(`SELECT * FROM ${this.table} WHERE nombre_enfermero=${areaName} AND estado_enfermero='1'`);
        return enfermero;
    }

    async createNurse({ nurse }){
        const { nombre_enfermero, apellido_enfermero, especialidad } = nurse;
        await mysql.query(`INSERT INTO ${this.table}(nombre_enfermero, apellido_enfermero, especialidad, estado_enfermero) VALUES("${nombre_enfermero}", "${apellido_enfermero}", "${especialidad}", 1)`);
    }

    async updateNurse({ nurse, nurseId }){
        const { nombre_enfermero, apellido_enfermero, especialidad } = nurse;
        await mysql.query(`UPDATE ${this.table} SET nombre_enfermero="${nombre_enfermero}", apellido_enfermero="${apellido_enfermero}", especialidad="${especialidad}" WHERE id_enfermero=${nurseId} AND estado_enfermero=1`);
    }

    async deleteNurse({ nurseId }){
        await mysql.query(`UPDATE ${this.table} SET estado_enfermero='0' WHERE id_enfermero=${nurseId}`);
    }
}

module.exports = new Nurse();