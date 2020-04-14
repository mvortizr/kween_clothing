import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-action-creator';
import {useDispatch} from 'react-redux'



const App =() => {


  const dispatch = useDispatch()

  useEffect(() => {     
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {      
        if(userAuth){
          const userRef =  await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapshot => {
             dispatch(setCurrentUser({id: snapshot.id, ...snapshot.data()}));
          });
        } else {
           dispatch(setCurrentUser(userAuth)); //setting it to null
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
      <Header/>
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
