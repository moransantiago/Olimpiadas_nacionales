import React from 'react';
import { Link } from 'react-router-dom';

const UsuariosLayout = props => {
    return (
        <div className="row" style={{ 'padding-left': '10%', 'padding-top': '2%' }}>
            <div className="panel">
                <h1 className="black">Usuarios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map(item => {
                            return (
                                <tr key={item.id_usuario}>
                                    <td>{item.nombre_usuario}</td>
                                    <td>{item.apellido_usuario}</td>
                                    <td>{item.email_usuario}</td>
                                    <td>{item.telefono_usuario}</td>
                                    <td>{item.nombre_tipo}</td>
                                    <td className="row">
                                        <Link to={`/usuarios/${item.id_usuario}`}>
                                            <button style={{'marginRight': '4px'}}>Editar usuario</button>
                                        </Link>
                                        <button onClick={() => { props.onDelete(item.id_usuario) }}>Borrar usuario</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="column">
                <h1 className="black">Crear un usuario</h1>
                <form onSubmit={e => {
                    props.onSubmit(
                        e,
                        {
                            name: document.getElementById('name').value,
                            lastName: document.getElementById('lastName').value,
                            password: document.getElementById('password').value,
                            email: document.getElementById('email').value,
                            telphone: document.getElementById('telphone').value,
                            type: document.getElementById('type').value
                        }
                    );
                }}>
                    <label className="input">Nombre</label>
                    <input id="name" className="input" type="text"></input>
                    <label className="input">Apellido</label>
                    <input id="lastName" className="input" type="text"></input>
                    <label className="input">Contraseña</label>
                    <input id="password" className="input" type="password"></input>
                    <label className="input">Email</label>
                    <input id="email" className="input" type="email"></input>
                    <label className="input">Telefono</label>
                    <input id="telphone" className="input" type="number"></input>
                    <label className="input">Tipo</label>
                    <br />
                    <select id="type" className="input">
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </select>
                    <input type="submit" value="Create user"></input>
                </form>
            </div>
        </div>
    );
};

export default UsuariosLayout;