import React from 'react';

const EditFichasLayout = props => {
    return (
        <div className="panel-container">
            <h1 className="black">Editar ficha: ID {props.ficha.id_pasiente}</h1>
            <form className="column" onSubmit={e => { props.onSubmit(e) }}>
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Nombre</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="nombre_pasiente" type="text" onChange={e => { props.onChange(e) }} value={props.ficha.nombre_pasiente} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Apellido</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="apellido_pasiente" type="text" onChange={e => { props.onChange(e) }} value={props.ficha.apellido_pasiente} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Telefono</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="telefono_pasiente" type="number" onChange={e => { props.onChange(e) }} value={props.ficha.telefono_pasiente} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>DNI</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="dni_pasiente" type="number" onChange={e => { props.onChange(e) }} value={props.ficha.dni_pasiente} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Ubicacion</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="ubicacion_pasiente" type="text" onChange={e => { props.onChange(e) }} value={props.ficha.ubicacion_pasiente} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Alergias</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="alergia" type="text" onChange={e => { props.onChange(e) }} value={props.ficha.alergia} />
                <h4 style={{ 'fontSize': 24, 'marginBottom': '10px', 'marginTop': '10px' }}>Estado de saludo</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="estado" type="text" onChange={e => { props.onChange(e) }} value={props.ficha.estado} />
                <input type="submit" value="Guardar cambios" />
            </form>
        </div>
    );
};

export default EditFichasLayout;