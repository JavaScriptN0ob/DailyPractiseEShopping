import React from 'react';
import { connect } from 'react-redux';

import './CheckOutItem.scss';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cartAction';

const CheckOutItem = ({
  cartItem,
  clearItem,
  removeItemFromCart,
  addItemToCart,
}) => {
  const {
    imageUrl,
    name,
    price,
    quantity,
  } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => addItemToCart(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => (dispatch(clearItemFromCart(item))),
  removeItemFromCart: (item) => (dispatch(removeItem(item))),
  addItemToCart: (item) => (dispatch(addItem(item))),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
