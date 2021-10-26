import React from 'react';
import "./cart-item.styles.scss"


const CartItem=(item) =>
{
   let {imageUrl, price, name, quantity}= item.item
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-detail">
                <span className='name'>{name}</span>
                <br/>
                <span className='price'> {quantity} x ${price}</span>
                <br/>
                <span className='price'> {quantity===1? null: "total "+quantity*price+"$"} </span>
            </div>
        </div>
    );
};

export default CartItem;