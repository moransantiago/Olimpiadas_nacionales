import React from 'react';

import '../styles/Alarmas.css';

const AlarmsLayout = props => {
    return (
        <div className="center">
            <div>
                <button className="doctor" onClick={ () => { props.onEmergency('doctor') }}>Call a doctor</button>         
            </div>
            <div>
                <button className="emergency" onClick={ () => { props.onEmergency('emergency') }}>CALL AN EMERGENCY!</button>         
            </div>
        </div>
    );
};

export default AlarmsLayout;