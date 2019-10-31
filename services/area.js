const mysql = require('../lib/mysql');

class Area{
    constructor(){
        this.table = 'areas';
    }

    async getAreas(){
        const areas = await mysql.query(`SELECT * FROM ${this.table}`);
        return areas;
    }

    async getAreaById({ areaId }){
        const area = await mysql.query(`SELECT * FROM ${this.table} WHERE id_area=${areaId}`);
        return area;
    }

    async getAreaByName({ areaName }){
        const area = await mysql.query(`SELECT * FROM ${this.table} WHERE nombre_area=${areaName}`);
        return area;
    }

    async createArea({ areaName }){
        await mysql.query(`INSERT INTO ${this.table}(nombre_area) VALUES("${name}")`);
    }

    async deleteArea({ areaId }){
        await mysql.query(`DELETE FROM ${this.table} WHERE id_area=${areaId}`);
    }
}

module.exports = new Area();