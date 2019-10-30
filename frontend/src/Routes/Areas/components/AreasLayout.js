import React from 'react';

import '../styles/Tables.css'

const AreasLayout = props => {
    return (
        <React.Fragment>
            <h1>Areas</h1>
            <table>
                <tr>
                    <th>Número de area</th>
                    <th>Nombre</th>
                    <th>Lugar</th>
                </tr>
                {props.areas.map((item, index) => {
                    return (
                        <tr>
                            <td>{`Area número: ${item.id_area}`}</td>
                            <td>{item.nombre_area}</td>
                            <td>{item.nombre_area}</td>
                        </tr>
                    );  
                })}
            </table>
        </React.Fragment>
    );
};

export default AreasLayout;