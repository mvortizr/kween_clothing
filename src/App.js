import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/Homepage';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={ ()=> <HomePage />}/>
    </Switch>
  );
}

export default App;
