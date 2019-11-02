import React, { Component } from 'react';

import AlarmsLogLayout from '../components/AlarmsLogLayout';

import { getAlarms } from '../../../utils/api';

class AlarmsLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarms: [
                {
                    id_alarma: 1,
                    tipo_alarma: '',
                    fecha: new Date(),
                    ubicacion: '',
                    area: ''
                }
            ]
        }
    }

    componentDidMount = async () => {
        try {
            const { data } = await getAlarms();
            this.setState({ alarms: data.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <AlarmsLogLayout
                alarms={this.state.alarms}
            />
        );
    }
}

export default AlarmsLog;