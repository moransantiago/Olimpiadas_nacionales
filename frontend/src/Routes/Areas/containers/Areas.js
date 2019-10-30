import React, { Component } from 'react';

import AreasLayout from '../components/AreasLayout';

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

    render() {
        return (
            <AreasLayout 
                areas={this.state.areas}
            />
        );
    }
}

export default Areas;