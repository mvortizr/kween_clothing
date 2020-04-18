import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils';
import {useSelector} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';



const Header = () => {

    const currentUser = useSelector(state => state.user.currentUser)
    const hideCart = useSelector(state => state.cart.hidden)

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options-container">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
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
                <CartIcon />
            </div>
            
            { hideCart? null: <CartDropDown/> }
        </div>
    );
}


export default Header