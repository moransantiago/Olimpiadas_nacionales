import React, { Component } from 'react';

import EditFichaLayout from '../components/EditFichaLayout';

import { getFicha, updateFicha } from '../../../../utils/api';

class EditFicha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ficha: {}
        };
    }

    componentDidMount = async () => {
        try {
            const { data } = await getFicha(this.props.match.params.id);
            this.setState({ ficha: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        this.setState({
            ficha: {
                ...this.state.ficha,
                [e.target.name]: e.target.value
            },
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await updateFicha(this.state.ficha.id_pasiente, this.state.ficha);
            console.log(this.state.ficha);
            alert('Ficha médica actualizado con exito!');
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error');
        }
    }

    render() {
        return (
            <EditFichaLayout
                ficha={this.state.ficha}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default EditFicha;