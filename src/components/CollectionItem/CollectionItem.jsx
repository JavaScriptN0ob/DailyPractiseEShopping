import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';

import CustomButton from '../CustomButton';
import { addItem } from '../../redux/cart/cartAction';

const CollectionItem = ({
  item,
  addItemToCart,
}) => {
  const {
    imageUrl,
    name,
    price,
  } = item;
  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton
      onClick={() => addItemToCart(item)}
      inverted
    >Add to cart</CustomButton>
  </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => (dispatch(addItem(item))),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
