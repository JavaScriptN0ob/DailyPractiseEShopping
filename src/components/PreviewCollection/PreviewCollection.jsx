import React from 'react';

import './PreviewCollection.scss';

import CollectionItem from '../CollectionItem';

const PreviewCollection = ({
  title,
  items,
}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, index) => (index < 4))
          .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
          ))
      }
    </div>
  </div>
);

export default PreviewCollection;
