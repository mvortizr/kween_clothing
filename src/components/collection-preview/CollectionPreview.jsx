import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({items,title}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(({id, ...itemInfo}) => (<CollectionItem key={id} {...itemInfo}/>))
                }
            </div>

        </div>
    );
}

export default CollectionPreview;