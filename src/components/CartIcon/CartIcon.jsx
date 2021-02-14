import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';

import toggleCartHidden from '../../redux/cart/cartAction';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ onCartToggle }) => (
  <div onClick={onCartToggle} className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onCartToggle: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
