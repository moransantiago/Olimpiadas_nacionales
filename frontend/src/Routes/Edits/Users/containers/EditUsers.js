import React, { Component } from 'react';

import EditUsersLayout from '../components/EditUsersLayout';

import { getUser, updateUser } from '../../../../utils/api';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount = async () => {
        try {
            const { data } = await getUser(this.props.match.params.id);
            data.data.nombre_tipo === 'admin' ? data.data.tipo_usuario = 1 : data.data.tipo_usuario = 2;
            this.setState({ user: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            },
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await updateUser(this.state.user.id_usuario, this.state.user);
            console.log(this.state.user);
            alert('Usuario actualizado con exito!');
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error');
        }
    }

    render() {
        return (
            <EditUsersLayout
                user={this.state.user}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default EditUser;