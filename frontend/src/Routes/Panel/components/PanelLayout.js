import React from 'react';
import {
    Link
} from 'react-router-dom';

import '../styles/Panel.css';

const PanelLayout = props => {
    return (
        <div className="column">
            <h1>Panel de administración</h1>
            <Link to="/login">
                <button>
                    Crear un area
                </button>
            </Link>    
            <Link to="/alarmas">
                <button>
                    Activar una alarma
                </button>
            </Link>
            <Link to="/areas">
                <button>
                    Crear una zona o area
                </button>
            </Link>
        </div>
    );
};

export default PanelLayout;