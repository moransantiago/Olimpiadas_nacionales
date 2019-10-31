const mysql = require('../lib/mysql');

class Report{
    constructor(){
        this.table = 'reportes';
    }

    async getReports(){
        const reports = await mysql.query(`SELECT * FROM ${this.table}`);
        return reports;
    }
    
    async getReportById({ reportId }){
        const report = await mysql.query(`SELECT * FROM ${this.table} WHERE id_report=${reportId}`);
        return report;
    }

    async createReport({ report }){
        const { enfermero_reporte, pasiente_reporte, alarma_reporte, atendido_reporte } = report;
        await mysql.query(`INSERT INTO ${this.table} (enfermero_reporte, pasiente_reporte, alarma_reporte, atendido_reporte) VALUES(${enfermero_reporte}, ${pasiente_reporte}, ${alarma_reporte}, ${atendido_reporte}`);
    }

    async deleteReport({ reportId }){
        await mysql.query(`DELETE FROM ${this.table} WHERE id_reporte=${reportId}`);
    }
}

module.exports = new Report();