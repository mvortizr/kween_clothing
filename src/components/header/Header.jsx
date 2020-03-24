import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg';


const optionStyle = {
    margin:'0 10px'
}

const Header = () => (

    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options-container">
            <Link to="/shop" style={optionStyle}>
                SHOP
            </Link>
            <Link to="/contact" style={optionStyle}>
                CONTACT
            </Link>
            <Link to="/signin" style={optionStyle}>
                SIGN IN / SIGN UP
            </Link>
        </div>
    </div>
)

export default Header