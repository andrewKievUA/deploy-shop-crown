import React from 'react'
import "./checkout-item.styles.scss"
import { connect } from 'react-redux'
import { removeItemFromCartAction } from "../../redux/cart/cart.actions";

 const CheckoutItem=({cartItem:{name,quantity,price, imageUrl},dispatch})=> {
     
    return (
        <div className="checkout-item">
            <div className="image-container">
                 <img src={imageUrl} alt="item"/>
            </div>   
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>dispatch(removeItemFromCartAction(name))}> &#10060;</span>

            
        </div>
    )
}




export default connect()(CheckoutItem) 
