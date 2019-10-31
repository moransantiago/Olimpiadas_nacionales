import React from 'react';
import {
    Link
} from 'react-router-dom';

import '../styles/Panel.css';

const PanelLayout = props => {
    return (
        <div className="panel-container">
            <h1 className="title">Panel de administración</h1>
            <Link to="/areas">
                <button className="menu-buttons">
                    Administrar areas
                </button>
            </Link>    
            <Link to="/ficha">
                <button className="menu-buttons">
                    Crear una ficha de paciente
                </button>
            </Link>
            <Link to="/alarmas">
                <button className="menu-buttons">
                    Registro de alarmas
                </button>
            </Link>
            <Link to="/usuarios">
                <button className="menu-buttons">
                    Administrar usuarios
                </button>
            </Link>
            <Link to="/emergencia">
                <button className="menu-buttons">
                    Alarma
                </button>
            </Link>
        </div>
    );
};

export default PanelLayout;