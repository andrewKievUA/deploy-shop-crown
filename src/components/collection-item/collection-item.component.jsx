
import React from 'react';
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";


const CollectionItem = ({id, name, price, imageUrl,addItem}) => {
    //console.log(id,key, name, price,"key")
       return (
        <div className="collection-item">

            <div className="image"
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>

            </div>
            <CustomButton inverted onClick={()=>addItem(id)}> Add to cart </CustomButton>
        </div>

    );
}

const mapDispatchToProps = dispatch=>({
    addItem:item=>{dispatch(addItem(item)) }
})

export default connect(null,mapDispatchToProps)(CollectionItem) ;