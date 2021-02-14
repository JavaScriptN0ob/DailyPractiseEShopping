import React from 'react';

import COLLECTION_DATA from '../../constants/COLLECTION_DATA';

import PreviewCollection from '../../components/PreviewCollection';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: COLLECTION_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {
          collections.map(({
            id,
            ...otherProps
          }) => (
            <PreviewCollection key={id} {...otherProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
