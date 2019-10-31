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
            },
            // autoPlay: true
        }
    }

    componentDidMount = () => {
        const listener = socket.connect('http://192.168.30.7:4000/ws/alarm');
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
                // autoPlay={this.state.autoPlay}
            />
        );
    }
}

export default Emergency;