import React, { Component } from 'react';

import UsuariosLayout from '../components/UsuariosLayout';
import { getUsers, deleteUser } from '../../../utils/api';

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

    componentDidMount = async () => {
        try {
            const { data } = await getUsers();
            this.setState({ users: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleDelete = async id => {
        try {
            await deleteUser(id);
            alert('Usuario eliminado con éxito');
        } catch (error) {
            console.log(error);
            alert('No se ha podido borrar el usuario');
        }
    }

    render() {
        return (
            <UsuariosLayout
                users={this.state.users}
                onDelete={this.handleDelete}
            />
        );
    }
}

export default Usuarios;