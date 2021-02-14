import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state),
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onCartToggle: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
