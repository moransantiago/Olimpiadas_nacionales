import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Alarms from './Routes/containers/Alarms';
import Login from './Routes/containers/Login';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/alarms" component={Alarms}/>
        <Route exact path="/login" component={Login}/>
        <Route>404 not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;