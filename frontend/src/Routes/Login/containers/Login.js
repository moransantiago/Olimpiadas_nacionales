import React, { Component } from 'react';

import LoginLayout from '../components/LoginLayout';

class Login extends Component {
    handleLogin = e => {
        e.preventDefault();
        alert('Login intentado');
    }

    render() {
        return (
            <LoginLayout
                onLogin={ this.handleLogin }
            />
        );
    }
}

export default Login;