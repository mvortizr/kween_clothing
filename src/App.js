import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';

let routes = [
  {
    path: '/',
    render: (props) => <HomePage {...props}/>
  },
  {
    path: '/shop',
    render: (props) => <Shop {...props} />
  },
  {
    path: '/signin',
    render: (props) => <SignInSignUp {...props} />
  },
];

function App() {
  return (
  <div>
    <Header/>
    <Switch>
      {routes.map(
          ({path,render}) => (
            <Route exact path={path} render={(props) => render(props)}/>
          )
        )
      }
    </Switch>
  </div>
  );
}

export default App;
