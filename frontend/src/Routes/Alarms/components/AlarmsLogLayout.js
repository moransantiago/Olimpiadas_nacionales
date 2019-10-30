import React from 'react';

const AlarmsLogLayout = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Fecha</th>
                    <th>Ubicacion</th>
                    <th>Area</th>
                </tr>
            </thead>
            <tbody>
                {props.alarms.map(item => {
                    return (
                        <tr key={item.id_alarma}>
                            <td>{item.tipo_alarma}</td>
                            <td>{item.fecha_alarma}</td>
                            <td>{item.ubicacion}</td>
                            <td>{item.area_alarma}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default AlarmsLogLayout;