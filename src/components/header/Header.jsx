import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils';
import {useSelector} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg';


const Header = () => {

    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options-container">
                <Link to="/shop" >
                    SHOP
                </Link>
                <Link to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                      SIGN OUT
                    </div>
                  ) : (
                    <Link className='option' to='/signin'>
                      SIGN IN / SIGN UP
                    </Link>
                )}
            </div>
        </div>
    );
}


export default Header