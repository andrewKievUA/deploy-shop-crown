import React from 'react'
import "./checkout-item.styles.scss"
import { connect } from 'react-redux'
import { removeItemFromCartAction,increasingQuantityCartAction,decreasingQuantityCartAction } from "../../redux/cart/cart.actions";

 const CheckoutItem=({cartItem:{name,quantity,price, imageUrl},dispatch})=> {
     
    return (
        <div className="checkout-item">
            <div className="image-container">
                 <img src={imageUrl} alt="item"/>
            </div>   
            <span className="name">{name}</span>


            
            <span className="quantity">
                <span  onClick={()=>dispatch(decreasingQuantityCartAction(name))} className="change-quantity-button">&#9664;</span>
             {quantity}
                <span onClick={()=>dispatch(increasingQuantityCartAction(name))} className="change-quantity-button">&#9654;</span>
                 
            </span>
            
            <span className="price">{price}</span>
            <span  onClick={()=>dispatch(removeItemFromCartAction(name))} className="remove-button">&#9986;</span>

            
        </div>
    )
}




export default connect()(CheckoutItem) 
