import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './CartDropdown.scss';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

import { selectCartItems } from '../../redux/cart/cartSelector';
import toggleCartHidden from '../../redux/cart/cartAction';

const CartDropdown = ({
  cartItems,
  history,
  dispatch,
}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )
      }
    </div>
    <CustomButton onClick={
      () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }
    }>GO TO CHECKOUT</CustomButton>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
