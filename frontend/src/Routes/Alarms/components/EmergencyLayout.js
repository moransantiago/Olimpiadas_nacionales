import React from 'react';

import '../styles/Emergencia.css';

import sound from '../../../assets/audios/emergencia.mp3';

const EmergencyLayout = props => {
    return (
        <div className={`container ${props.data.type === 'emergency' && 'red'} ${props.data.type === 'normal' && 'yellow'}`}>
            <h1>{`Tipo de alarma: ${props.data.type}`}</h1>
            <h2>{`Area: ${props.data.area}`}</h2>
            <h3>{`Localización: ${props.data.location}`}</h3>
            {/* {!props.autoPlay ? 
                <audio ref={props.ref} src={sound} autoPlay></audio>
                :
                <audio ref={props.ref} src={sound}></audio>
            } */}
        </div>
    );
};

export default EmergencyLayout;