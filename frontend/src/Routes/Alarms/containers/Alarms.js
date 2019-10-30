import React, { Component } from 'react';

import AlarmsLayout from '../components/AlarmsLayout';

class alarms extends Component {
    handleEmergency = type => {
        switch(type) {
            case 'doctor':
                alert('Doctor called');
                break;

            case 'emergency':
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