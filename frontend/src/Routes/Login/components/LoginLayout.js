import React from 'react';

import '../styles/Login.css';

const LoginLayout = props => {
    return (
        <form className="column" onSubmit={ e => { props.onLogin(e) } }>
            <h1>Login</h1>
            <label className="first label">Usuario</label>
            <input className="input-login" type="text"/>
            <label className="label-login">Contraseña</label>
            <input className="input-login" type="password"/>
            <input className="input-login" type="submit" value="Login!"/>
        </form>
    );
};

export default LoginLayout;