import React from 'react';

import '../styles/Tables.css'

const AreasLayout = props => {
    return (
        <div className="row">
            <div>
                <h1 className="title">Areas</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Número de area</th>
                            <th>Nombre</th>
                            <th>Lugar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.areas.map(item => {
                            return (
                                <tr key={item.id_area}>
                                    <td>{item.id_area}</td>
                                    <td>{item.nombre_area}</td>
                                    <td>{item.ubicacion}</td>
                                    <td>
                                        <button onClick={null}>Borrar area</button>
                                    </td>
                                </tr>
                            );  
                        })}
                    </tbody>
                </table>
            </div>
            <hr/>
            <div className="column">
                <h1>Agregar un area</h1>
                <form className="column" onSubmit={ e => props.onSubmit(e) }>
                    <label>Nombre</label>
                    <input type="text"></input>
                    <input type="submit" value="Create"></input>
                </form>
            </div>
        </div>
    );
};

export default AreasLayout;