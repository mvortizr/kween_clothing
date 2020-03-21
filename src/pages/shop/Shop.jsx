import React, {useState} from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import SHOP_DATA from './shop-data.js';

const Shop = (props) => {
    let [collections, setCollection] = useState(SHOP_DATA);
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...collectionInfo }) => (<CollectionPreview key={id} {...collectionInfo} />))
        }
      </div>
    );
}

export default Shop;