import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Alarms from './Routes/Alarms/containers/Alarms';
import Login from './Routes/Login/containers/Login';
import Panel from './Routes/Panel/containers/Panel';
import Areas from './Routes/Areas/containers/Areas';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to='/panel'/>}/>
        <Route exact path="/alarmas/:id_area" component={Alarms}/>
        <Route exact path="/areas" component={Areas}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/panel" component={Panel}/>
        <Route>404 not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;