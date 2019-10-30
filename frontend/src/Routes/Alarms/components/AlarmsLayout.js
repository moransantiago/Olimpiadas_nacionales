import React from 'react';

const AlarmsLayout = props => {
    return (
        <React.Fragment>
            <div>
                <button onClick={ () => { props.onEmergency('doctor') }}>Call a doctor</button>         
            </div>
            <div>
                <button onClick={ () => { props.onEmergency('emergency') }}>CALL AN EMERGENCY!</button>         
            </div>
        </React.Fragment>
    );
};

export default AlarmsLayout;