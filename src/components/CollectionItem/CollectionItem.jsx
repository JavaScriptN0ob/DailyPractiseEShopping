import React from 'react';

import './CollectionItem.scss';

import CustomButton from '../CustomButton';

const CollectionItem = ({
  id,
  name,
  imageUrl,
  price,
}) => (
  <div className='collection-item' key={id}>
    <div
      className='image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
