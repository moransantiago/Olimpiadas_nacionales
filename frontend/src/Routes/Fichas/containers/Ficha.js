import React, { Component } from 'react';

import FichaLayout from '../components/FichaLayout';
import { setFicha, getFichas, deleteFicha } from '../../../utils/api';

class Ficha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fichas: [
            ]
        }
    }

    componentDidMount = async () => {
        try {
            const { data } = await getFichas();
            this.setState({ fichas: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleDelete = async id => {
        try {
            await deleteFicha(id);
            alert('La ficha fue eliminada con éxito');
        } catch (error) {
            console.log(error);
            alert('La ficha fue eliminada con éxito');
        }
    }
    
    handleSubmit = async (e, data) => {
        e.preventDefault();
        try {
            console.log(data);
            await setFicha(data);
            alert('Ficha creada con éxito');
        } catch (error) {
            console.log(error);
            alert('No se pudo crear la ficha');
        }
    }

    render() {
        return (
            <FichaLayout
                pacientes={this.state.fichas}
                onSubmit={this.handleSubmit}
                onDelete={this.handleDelete}
            />
        );
    }
}

export default Ficha;