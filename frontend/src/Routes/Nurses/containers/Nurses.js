import React, { Component } from 'react';

import NursesLayout from '../components/NursesLayout';

import { getNurses, deleteNurse, setNurse } from '../../../utils/api';

class Nurses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nurses: []
        }
    }

    componentDidMount = async () => {
        try {
            const { data } = await getNurses();
            this.setState({ nurses: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = async (e, nurse) => {
        e.preventDefault();
        try {
            await setNurse(nurse);
            alert('Enfermero creado exitosamente!');
            const { data } = await getNurses();
            this.setState({ nurses: data.data });
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error');
        }
    }

    handleDelete = async id => {
        try {
            await deleteNurse(id);
            alert('Cuenta eliminada con éxito');
            const { data } = await getNurses();
            this.setState({ nurses: data.data });
        } catch (error) {
            console.log(error);
            alert('No se ha podido borrar la cuenta');
        }
    }

    render() {
        return (
            <NursesLayout
                nurses={this.state.nurses}
                onSubmit={this.handleSubmit}
                onDelete={this.handleDelete}
            />
        );
    }
}

export default Nurses;