import React from 'react';

const EditAreaLayout = props => {
    return (
        <div className="panel-container">
            <h1 className="black">Editar area numero {props.area.id_area}</h1>
            <form className="column" onSubmit={e => { props.onSubmit(e) }}>
                <h4 style={{ 'fontSize': 24, 'marginBottom': '15px' }}>Nombre</h4>
                <input style={{ 'margin': 0, 'width': '300px' }} name="nombre_area" type="text" onChange={e => { props.onChange(e) }} value={props.area.nombre_area} />
                <input type="submit" value="Guardar" />
            </form>
        </div>
    );
};

export default EditAreaLayout;