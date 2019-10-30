import React, { Component } from 'react';

import { sendAlarm } from '../../../utils/api';

import AlarmsLayout from '../components/AlarmsLayout';

class alarms extends Component {
    handleEmergency = async type => {
        switch(type) {
            case 'doctor':
                await sendAlarm(this.props.match.params.area, this.props.match.params.ubicacion, 'normal');
                alert('Doctor called');
                break;

            case 'emergency':
                await sendAlarm(this.props.match.params.area, this.props.match.params.ubicacion, 'emergency');
                alert('EMERGENCY CALLED!');
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <AlarmsLayout
                onEmergency={this.handleEmergency}
            />
        );
    }
}

export default alarms;