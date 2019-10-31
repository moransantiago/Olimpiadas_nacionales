import React from 'react';

import '../Styles/Ficha.css';

const FichaLayout = props => {
    return (
        <div className="panel-container">
            <h1 className="title">Ficha de paciente</h1>
            <div className="row">
                <div className="column">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.pacientes.map(item => {
                                return (
                                    <tr key={item.id_pasiente}>
                                        <td>{item.id_pasiente}</td>
                                        <td>{`${item.nombre_pasiente} ${item.apellido_pasiente}`}</td>
                                        <td>{item.telefono_pasiente}</td>
                                        <td>
                                            <button onClick={() => { props.onDelete(item.id_pasiente) }}>Borrar ficha</button>
                                        </td>
                                    </tr>
                                );  
                            })}
                        </tbody>
                    </table>
                </div>
                <hr/>
                <div className="column">
                    <form onSubmit={e => {
                        props.onSubmit(
                            e,
                            {
                                name: document.getElementById('name').value,
                                lastName: document.getElementById('lastName').value,
                                telphone: document.getElementById('telphone').value,
                                DNI: document.getElementById('DNI').value,
                                location: document.getElementById('location').value,
                                alergies: document.getElementById('alergies').value,
                                state: document.getElementById('state').value
                            }
                        );
                    }}>
                        <label className="input">Nombre</label>
                        <input id="name" className="input" type="text"></input>
                        <label className="input">Apellido</label>
                        <input id="lastName" className="input" type="text"></input>
                        <label className="input">Telefono</label>
                        <input id="telphone" className="input" type="number"></input>
                        <label className="input">DNI</label>
                        <input id="DNI" className="input" type="number"></input>
                        <label className="input">Ubicación</label>
                        <input id="location" className="input" type="text"></input>
                        <label className="input">Alergias</label>
                        <input id="alergies" className="input" type="text"></input>
                        <label className="input">   Estado</label>
                        <input id="state" className="input" type="text"></input>
                        <input className="input" type="submit" value="Crear ficha"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FichaLayout;