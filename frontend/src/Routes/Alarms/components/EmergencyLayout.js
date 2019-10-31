import React from 'react';

import '../styles/Emergencia.css';

const EmergencyLayout = props => {
    return (
        <div className={`container ${props.data.type === 'emergency' && 'red'} ${props.data.type === 'normal' && 'yellow'}`}>
            <h1>{`Tipo de alarma: ${props.data.type}`}</h1>
            <h2>{`Area: ${props.data.area}`}</h2>
            <h3>{`Localización: ${props.data.location}`}</h3>
        </div>
    );
};

export default EmergencyLayout;