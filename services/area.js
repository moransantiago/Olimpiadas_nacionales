const mysql = require('../lib/mysql');

class Area{
    constructor(){
        this.table = 'areas';
    }

    async getAreas(){
        const areas = await mysql.query(`SELECT * FROM ${this.table} WHERE estado_area='1'`);
        return areas;
    }

    async getAreaById({ areaId }){
        const [area] = await mysql.query(`SELECT * FROM ${this.table} WHERE id_area=${areaId} AND estado_area='1'`);
        return area;
    }

    async getAreaByName({ areaName }){
        const area = await mysql.query(`SELECT * FROM ${this.table} WHERE nombre_area=${areaName} AND estado_area='1'`);
        return area;
    }

    async createArea({ nombre_area }){
        await mysql.query(`INSERT INTO ${this.table}(nombre_area, estado_area) VALUES("${nombre_area}", 1)`);
    }

    async updateArea({ nombre_area, areaId }){
        await mysql.query(`UPDATE ${this.table} SET nombre_area="${nombre_area}" WHERE id_area=${areaId} AND estado_area=1`);
    }

    async deleteArea({ areaId }){
        await mysql.query(`UPDATE ${this.table} SET estado_area='0' WHERE id_area=${areaId}`);
    }
}

module.exports = new Area();