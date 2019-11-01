import React from 'react';

const ReportLayout = props => {
    return (
        <div className="panel-container">
            <div className="row">
                <div className="column">
                    <h1 className="black">Registro de reportes</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Enfermero</th>
                                <th>Paciente</th>
                                <th>Alarma</th>
                                <th>Atendido</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.reports.map(item => {
                                return (
                                    <tr key={item.id_reporte}>
                                        <td>{item.enfermero_reporte}</td>
                                        <td>{item.pasiente_reporte}</td>
                                        <td>{item.alarma_reporte}</td>
                                        <td>{item.atendido_reportes}</td>
                                        <td>{item.descripcion_reporte}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="column">
                    <h1 className="black">Agregar este reporte</h1>
                    <form className="column" onSubmit={e => props.onSubmit(
                        e,
                        {
                            enfermero_reporte: document.getElementById('enfermero_reporte').value,
                            pasiente_reporte: document.getElementById('pasiente_reporte').value,
                            alarma_reporte: document.getElementById('alarma_reporte').value,
                            atendido_reportes: document.getElementById('atendido_reportes').value,
                            descripcion_reporte: document.getElementById('descripcion_reporte').value
                        }
                    )}>
                        <label>Enfermero</label>
                        <input id="enfermero_reporte" type="number"></input>
                        <label>Paciente</label>
                        <input id="pasiente_reporte" type="number"></input>
                        <label>Alarma</label>
                        <input id="alarma_reporte" type="number"></input>
                        <label>Atendido</label>
                        <input id="atendido_reportes" type="number"></input>
                        <label>Descripción</label>
                        <input id="descripcion_reporte" type="text"></input>
                        <input type="submit" value="Create"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportLayout;