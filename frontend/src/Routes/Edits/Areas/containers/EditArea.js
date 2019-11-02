import React, { Component } from 'react';

import EditAreaLayout from '../components/EditAreaLayout';

import { getArea, updateArea } from '../../../../utils/api';

class EditArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: {
                id_area: '',
                nombre_area: '',
                estado_area: ''
            }
        };
    }

    componentDidMount = async () => {
        try {
            const { data } = await getArea(this.props.match.params.id);
            this.setState({ area: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        this.setState({
            area: {
                ...this.state.area,
                [e.target.name]: e.target.value
            },
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await updateArea(this.state.area.id_area, this.state.area);
            alert('Area actualizada con exito!');
        } catch (error) {
            console.log(error);
            alert('Ha ocurrido un error');
        }
    }

    render() {
        return (
            <EditAreaLayout
                area={this.state.area}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default EditArea;