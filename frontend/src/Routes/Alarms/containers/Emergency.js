import React, { Component } from 'react';

import socket from 'socket.io-client';
import EmergencyLayout from '../components/EmergencyLayout';

class Emergency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                type: 'No hay emergencias aún',
                location: 'No definido',
                area: 'No definido',
            }
        }
    }

    componentDidMount = () => {
        const listener = socket.connect('http://181.229.213.140:5555/ws/alarm');
        listener.on('connect', () => {
            console.log('Device connected');
            listener.on('trigger', data => {
                this.setState({
                    data
                })
                setTimeout(() => {
                    this.setState({
                        data: {
                            type: 'No hay emergencias aún',
                            location: 'No definido',
                            area: 'No definido',
                        }
                    })
                }, 10000);
            });
        })
    }

    render() {
        return (
            <EmergencyLayout
                data={this.state.data}
            />
        );
    }
}

export default Emergency;