import React from 'react';

const Ficha = props => {
    return (
        <form>
            <label>Nombre</label>
            <input type="text"></input>
            <label>Apellido</label>
            <input type="text"></input>
            <label>Telefono</label>
            <input type="number"></input>
            <label>DNI</label>
            <input type="number"></input>
            <label>Ubicación</label>
            <input type="text"></input>
            <label>Alergias</label>
            <input type="text"></input>
            <input type="submit" value="Crear ficha"/>
        </form>
    );
};

export default Ficha;