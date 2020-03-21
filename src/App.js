import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

let routes = [
  {
    path: '/',
    render: (props) => <HomePage {...props}/>
  },
  {
    path: '/shop',
    render: (props) => <Shop {...props} />
  }
];

function App() {
  return (
  <div>
    {routes.map(
        ({path,render}) => (
          <Route exact path={path} render={(props) => render(props)}/>
        )
      )
    }
  </div>
  );
}

export default App;
