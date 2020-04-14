import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



const App =() => {

  const [currentUser,setCurrentUser] = useState(null);

  useEffect(() => {
      
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {      
        if(userAuth){
          const userRef =  await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapshot => {
            setCurrentUser({id: snapshot.id, ...snapshot.data()})
          })
        } else {
          setCurrentUser(userAuth); //setting it to null
        }      
      });

      return () => {
        unsubscribe()
      };

  }, []);

  const routes = [
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

  return (
  <div>
    <Header currentUser={currentUser}/>
    {console.log('currentUser',currentUser)}
    <Switch>
      {routes.map(
          ({path,render}) => (
            <Route exact path={path} key={path} render={(props) => render(props)}/>
          )
        )
      }
    </Switch>
  </div>
  );
}

export default App;
