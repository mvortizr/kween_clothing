import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import {useSelector} from 'react-redux'

const CartDropDown = () => {
	const cartItems = useSelector(state => state.cart.cartItems)
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map(cartItem => (
				 <CartItem key={cartItem.id} item={cartItem}/>
				))}
			</div>
			<CustomButton> CHECKOUT </CustomButton>
		</div>
	);
}

export default CartDropDown;