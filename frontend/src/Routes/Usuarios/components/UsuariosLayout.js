import React from 'react';

const UsuariosLayout = props => {
    return (
        <div className="panel-container">
            <h1>Usuarios</h1>
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
                                <td>{item.tipo}</td>
                                <td>
                                    <button onClick={null}>Borrar usuario</button>
                                </td>
                            </tr>
                        );  
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UsuariosLayout;