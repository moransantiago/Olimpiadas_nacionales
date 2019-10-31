import React, { Component } from 'react';

import UsuariosLayout from '../components/UsuariosLayout';
import { getUsers, deleteUser, setUser } from '../../../utils/api';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
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

    handleSubmit = async (e, user) => {
        e.preventDefault();
        try {
            await setUser(user);
            alert('Usuario creado exitosamente!');
            const { data } = await getUsers();
            this.setState({ users: data.data });
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error');
        }
    }
    handleDelete = async id => {
        try {
            await deleteUser(id);
            alert('Usuario eliminado con éxito');
            const { data } = await getUsers();
            this.setState({ users: data.data });
        } catch (error) {
            console.log(error);
            alert('No se ha podido borrar el usuario');
        }
    }

    render() {
        return (
            <UsuariosLayout
                users={this.state.users}
                onSubmit={this.handleSubmit}
                onDelete={this.handleDelete}
            />
        );
    }
}

export default Usuarios;