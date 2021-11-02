import React from "react"
import "./cart-dropdown.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect'

import {Link, withRouter} from "react-router-dom";

const CartDropdown = ({cartItems,toggleCartHiddenAA,history}) => {
    // console.log(toggleCartHiddenAA, "toglecard hidddden")
    // console.log(cartItems,"cartItems")
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?  
                cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
                
            : <div className="cardEmptyText"> your card is empty </div>}
        </div>
        <CustomButton inverted onClick={toggleCartHiddenAA}> CLOSE</CustomButton>
        
       
        <CustomButton  onClick={()=>{history.push('/checkout');toggleCartHiddenAA();}} > 
        GO TO CHECKOUT</CustomButton>
   

    </div>)
}
const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems
})

const mapDispatchToProps = dispatch=>({
    toggleCartHiddenAA:()=>dispatch(toggleCartHidden())
})

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(CartDropdown))