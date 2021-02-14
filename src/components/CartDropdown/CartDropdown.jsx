import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.scss';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

import { selectCartItems } from '../../redux/cart/cartSelector';

const CartDropdown = ({
  cartItems,
}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
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

export default connect(mapStateToProps)(CartDropdown);
