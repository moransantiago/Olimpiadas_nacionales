import React, { Component } from 'react';

import AreasLayout from '../components/AreasLayout';

import { getAreas } from '../../../utils/api';

class Areas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areas: [
                {
                    id_area: 1,
                    nombre_area: 'San Telmo'
                },
                {
                    id_area: 2,
                    nombre_area: 'La boca'
                },
                {
                    id_area: 3,
                    nombre_area: 'Balvanera'
                }
            ]
        }
    }

    componentDidMount = async () => {
        try {
            const { areas } = await getAreas();
            this.setState({ areas });
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <AreasLayout 
                areas={this.state.areas}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default Areas;