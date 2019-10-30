import React from 'react';

import './styles/Login.css';

const LoginLayout = props => {
    return (
        <form className="column" onSubmit={ e => { props.onLogin(e) } }>
            <label className="first">Usuario</label>
            <input type="text"/>
            <label>Contraseña</label>
            <input type="password"/>
            <input type="submit" value="Login!"/>
        </form>
    );
};

export default LoginLayout;