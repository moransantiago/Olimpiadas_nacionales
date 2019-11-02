import React, { Component } from 'react';

import EditNursesLayout from '../components/EditNursesLayout';

import { getNurse, updateNurse } from '../../../../utils/api';

class EditNurses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nurse: {}
        };
    }

    componentDidMount = async () => {
        try {
            const { data } = await getNurse(this.props.match.params.id);
            this.setState({ nurse: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        this.setState({
            nurse: {
                ...this.state.nurse,
                [e.target.name]: e.target.value
            },
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await updateNurse(this.state.nurse.id_enfermero, this.state.nurse);
            alert('Enfermero actualizado con exito!');
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error');
        }
    }

    render() {
        return (
            <EditNursesLayout
                nurse={this.state.nurse}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default EditNurses;