import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({items,title}) => {

//console.log(items[0].id,"title")
    return (
        <div className="collection-preview">

            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    //.filter((item,idx)=>idx<8)
                    .map(({id,index, ...item}) => (
                    <>
                    <CollectionItem key={index}  {...item} />
                   </>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;