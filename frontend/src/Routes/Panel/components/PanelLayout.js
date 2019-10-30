import React from 'react';
import {
    Link
} from 'react-router-dom';

import '../styles/Panel.css';

const PanelLayout = props => {
    return (
        <div className="column">
            <h1>Panel de administración</h1>
            <Link to="/areas">
                <button>
                    Administrar areas
                </button>
            </Link>    
            <Link to="/ficha">
                <button>
                    Crear una ficha de paciente
                </button>
            </Link>
            <Link to="/alarmas">
                <button>
                    Registro de alarmas
                </button>
            </Link>
            <Link to="/usuarios">
                <button>
                    Administrar usuarios
                </button>
            </Link>
        </div>
    );
};

export default PanelLayout;