import React from 'react';

const EditNursesLayout = props => {
    return (
        <div className="panel-container">
            <h1 className="black">Editar enfermero {props.nurse.nombre_enfermero} {props.nurse.apellido_enfermero}</h1>
            <form className="column" onSubmit={e => { props.onSubmit(e) }}>
                <h4 style={{ 'fontSize': 24, 'marginBottom': '15px' }}>Nombre</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="nombre_enfermero" type="text" onChange={e => { props.onChange(e) }} value={props.nurse.nombre_enfermero} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '15px' }}>Apellido</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="apellido_enfermero" type="text" onChange={e => { props.onChange(e) }} value={props.nurse.apellido_enfermero} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '15px' }}>Especialidad</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="especialidad" type="text" onChange={e => { props.onChange(e) }} value={props.nurse.especialidad} />
                <input type="submit" value="Guardar cambios" />
            </form>
        </div>
    );
};

export default EditNursesLayout;