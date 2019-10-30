import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import AlarmsLog from './Routes/Alarms/containers/AlarmsLog';
import Login from './Routes/Login/containers/Login';
import Panel from './Routes/Panel/containers/Panel';
import Areas from './Routes/Areas/containers/Areas';
import Botonera from './Routes/Alarms/containers/Alarms';
import Ficha from './Routes/Fichas/containers/Ficha';
import Usuarios from './Routes/Usuarios/containers/Usuarios'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to='/panel'/>}/>
        <Route exact path="/botonera/:area/:ubicacion" component={Botonera}/>
        <Route exact path="/alarmas" component={AlarmsLog}/>
        <Route exact path="/areas" component={Areas}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/ficha" component={Ficha}/>
        <Route exact path="/panel" component={Panel}/>
        <Route exact path="/usuarios" component={Usuarios}/>
        <Route>404 not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;