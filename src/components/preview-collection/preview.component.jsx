import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({items, title}) => {
    // console.log(items, "CollectionPreview items")
    // console.log(items[0].id, "CollectionPreview items")
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    //.filter((items,id))
                    .map(({id, ...item}) => (
                        <CollectionItem key={id}  {...item} id={id}/>
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview;