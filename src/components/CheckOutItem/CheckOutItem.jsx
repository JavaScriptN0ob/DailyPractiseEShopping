import React from 'react';
import { connect } from 'react-redux';

import './CheckOutItem.scss';

import { clearItemFromCart } from '../../redux/cart/cartAction';

const CheckOutItem = ({
  cartItem,
  clearItem,
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
      <span className='quantity'>{quantity}</span>
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
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
