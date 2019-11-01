import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AlarmsLayout from '../components/AlarmsLayout';

import { sendAlarm } from '../../../utils/api';

class alarms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: false
        };
    }

    handleEmergency = async type => {
        switch (type) {
            case 'doctor':
                await sendAlarm(this.props.match.params.area, this.props.match.params.ubicacion, 'normal');
                this.setState({ activated: true });
                alert('Doctor called');
                break;

            case 'emergency':
                await sendAlarm(this.props.match.params.area, this.props.match.params.ubicacion, 'emergency');
                this.setState({ activated: true });
                alert('EMERGENCY CALLED!');
                break;

            default:
                break;
        }
    }

    render() {
        return (
            !this.state.activated
                ?
                <AlarmsLayout
                    onEmergency={this.handleEmergency}
                />
                :
                <Link to="/reporte">
                    <button className="report">Generate report</button>
                </Link>
        );
    }
}

export default alarms;