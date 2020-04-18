import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
	<div className="cart-dropdown">
		<div className="cart-items">
		</div>
		<CustomButton> CHECKOUT </CustomButton>
	</div>
);

export default CartDropDown;