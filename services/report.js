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
        const [report] = await mysql.query(`SELECT * FROM ${this.table} WHERE id_reporte=${reportId}`);
        return report;
    }

    async createReport({ report }){
        const { enfermero_reporte, pasiente_reporte, alarma_reporte, atendido_reportes, descripcion_reporte } = report;
        await mysql.query(`INSERT INTO ${this.table} (enfermero_reporte, pasiente_reporte, alarma_reporte, atendido_reportes, descripcion_reporte) VALUES (${enfermero_reporte}, ${pasiente_reporte}, ${alarma_reporte}, ${atendido_reportes}, "${descripcion_reporte}")`);
    }

    async updateReport({ report, reportId }){
        const { enfermero_reporte, pasiente_reporte, alarma_reporte, atendido_reportes, descripcion_reporte } = report;
        await mysql.query(`UPDATE ${this.table} SET enfermero_reporte=${enfermero_reporte}, pasiente_reporte=${pasiente_reporte}, alarma_reporte=${alarma_reporte}, atendido_reportes=${atendido_reportes}, descripcion_reporte="${descripcion_reporte}" WHERE id_reporte=${reportId}`);
    }

    async deleteReport({ reportId }){
        await mysql.query(`DELETE FROM ${this.table} WHERE id_reporte=${reportId}`);
    }
}
//INSERT INTO `reportes`(`enfermero_reporte`, `pasiente_reporte`, `alarma_reporte`, `atendido_reportes`, `descripcion_reporte`) VALUES (2, 1, 8, 1,"Holaaa") 
module.exports = new Report();