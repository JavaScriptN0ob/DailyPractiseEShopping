import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';

import toggleCartHidden from '../../redux/cart/cartAction';
import selectCartItemsCount from '../../redux/cart/cartSelector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({
  onCartToggle,
  itemCount,
}) => (
  <div onClick={onCartToggle} className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

// const mapStqateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems
//     .reduce(
//       (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//       0,
//     ),
// });

const mapStqateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartToggle: () => dispatch(toggleCartHidden()),
});

export default connect(mapStqateToProps, mapDispatchToProps)(CartIcon);
