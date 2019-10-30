import React, { Component } from 'react';

import UsuariosLayout from '../components/UsuariosLayout';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id_usuario: 1,
                    nombre_usuario: 'Santiago',
                    apellido_usuario: 'Moran',
                    contraseña: '123',
                    email_usuario: 'salmiron@hotmail.com',
                    telefono_usuario: '1150473590',
                    tipo: 'Administrador'
                }
            ]
        }
    }

    render() {
        return (
            <UsuariosLayout
                users={this.state.users}
            />
        );
    }
}

export default Usuarios;