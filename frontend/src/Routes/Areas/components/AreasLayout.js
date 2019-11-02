import React from 'react';
import { Link } from 'react-router-dom';

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
                        </tr>
                    </thead>
                    <tbody>
                        {props.areas.map(item => {
                            return (
                                <tr key={item.id_area}>
                                    <td>{item.id_area}</td>
                                    <td>{item.nombre_area}</td>
                                    <td>
                                        <Link to={`/areas/${item.id_area}`}>
                                            <button style={{ 'marginRight': '5px' }}>Editar area</button>
                                        </Link>
                                        <button onClick={() => { props.onDelete(item.id_area) }}>Borrar area</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="column">
                <h1 className="black">Agregar un area</h1>
                <form className="column" onSubmit={e => props.onSubmit(e, document.getElementById('name').value)}>
                    <label>Nombre</label>
                    <input id="name" type="text"></input>
                    <input type="submit" value="Create"></input>
                </form>
            </div>
        </div>
    );
};

export default AreasLayout;