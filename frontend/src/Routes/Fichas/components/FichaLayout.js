import React from 'react';

const FichaLayout = () => {
    return (
        <div className="panel-container">
            <h1 className="title">Ficha de paciente</h1>
            <form>
                <label className="input">Nombre</label>
                <input className="input" type="text"></input>
                <label className="input">Apellido</label>
                <input className="input" type="text"></input>
                <label className="input">Telefono</label>
                <input className="input" type="number"></input>
                <label className="input">DNI</label>
                <input className="input" type="number"></input>
                <label className="input">Ubicación</label>
                <input className="input" type="text"></input>
                <label className="input">Alergias</label>
                <input className="input" type="text"></input>
                <input className="input" type="submit" value="Crear ficha"/>
            </form>
        </div>
    );
};

export default FichaLayout;