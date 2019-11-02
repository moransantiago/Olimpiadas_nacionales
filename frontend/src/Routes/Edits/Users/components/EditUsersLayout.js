import React from 'react';

const EditUserLayout = props => {
    return (
        <div className="panel-container">
            <h1 className="black">Editar usurario {props.user.nombre_usuario} {props.user.apellido_usuario}</h1>
            <form className="column" onSubmit={e => { props.onSubmit(e) }}>
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Nombre</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="nombre_usuario" type="text" onChange={e => { props.onChange(e) }} value={props.user.nombre_usuario} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Apellido</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="apellido_usuario" type="text" onChange={e => { props.onChange(e) }} value={props.user.apellido_usuario} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Email</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="email_usuario" type="email" onChange={e => { props.onChange(e) }} value={props.user.email_usuario} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Telphone</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="telefono_usuario" type="number" onChange={e => { props.onChange(e) }} value={props.user.telefono_usuario} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Type</h4>
                <select style={{ 'margin': 0, 'width': '300px' }} name="tipo_usuario" type="text" onChange={e => { props.onChange(e) }}>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select>
                <input type="submit" value="Guardar cambios" />
            </form>
        </div>
    );
};

export default EditUserLayout;