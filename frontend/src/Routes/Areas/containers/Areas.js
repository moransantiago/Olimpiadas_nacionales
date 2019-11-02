import React, { Component } from 'react';

import AreasLayout from '../components/AreasLayout';

import { getAreas, setArea, deleteArea } from '../../../utils/api';

class Areas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areas: [
            ]
        }
    }

    componentDidMount = async () => {
        try {
            const { data } = await getAreas();
            this.setState({ areas: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = async (e, areaName) => {
        e.preventDefault();
        try {
            await setArea(areaName);
            alert('Area creada con éxito!');
        } catch (error) {
            console.log(error);
            alert('Ha habido un problema');
        }
    }

    handleDelete = async id => {
        try {
            await deleteArea(id);
            alert('Area borrada con éxito!');
        } catch (error) {
            console.log(error);
            alert('Ha habido un problema');
        }
    }

    render() {
        return (
            <AreasLayout 
                areas={this.state.areas}
                onSubmit={this.handleSubmit}
                onDelete={this.handleDelete}
            />
        );
    }
}

export default Areas;