import React from 'react';
import { Link } from 'react-router-dom';

const NursesLayout = props => {
    return (
        <div className="row" style={{ 'paddingLeft': '10%', 'paddingTop': '2%' }}>
            <div className="panel">
                <h1 className="black">Enfermeros</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.nurses.map(item => {
                            return (
                                <tr key={item.id_enfermero}>
                                    <td>{item.nombre_enfermero}</td>
                                    <td>{item.apellido_enfermero}</td>
                                    <td>{item.especialidad}</td>
                                    <td className="row">
                                        <Link to={`/enfermeros/${item.id_enfermero}`}>
                                            <button style={{'marginRight': '4px'}}>Editar cuenta</button>
                                        </Link>
                                        <button onClick={() => { props.onDelete(item.id_enfermero) }}>Borrar cuenta</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="column">
                <h1 className="black">Registrar un enfermero</h1>
                <form onSubmit={e => {
                    props.onSubmit(
                        e,
                        {
                            nombre_enfermero: document.getElementById('nombre_enfermero').value,
                            apellido_enfermero: document.getElementById('apellido_enfermero').value,
                            especialidad: document.getElementById('especialidad').value
                        }
                    );
                }}>
                    <label className="input">Nombre</label>
                    <input id="nombre_enfermero" className="input" type="text"></input>
                    <label className="input">Apellido</label>
                    <input id="apellido_enfermero" className="input" type="text"></input>
                    <label className="input">Especialidad</label>
                    <input id="especialidad" className="input" type="text"></input>
                    <input type="submit" value="Create user"></input>
                </form>
            </div>
        </div>
    );
};

export default NursesLayout;