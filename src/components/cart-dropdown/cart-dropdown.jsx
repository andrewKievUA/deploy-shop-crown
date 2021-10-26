import React from "react"
import "./cart-dropdown.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {toggleCartHidden } from "../../redux/cart/cart.actions";



const CartDropdown = ({cartItems,toggleCartHiddenAA}) => {

    console.log(toggleCartHiddenAA, "toglecard hidddden")
    console.log(cartItems,"cartItems")
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem}/>)}
        </div>
        <CustomButton inverted onClick={toggleCartHiddenAA}> CLOSE</CustomButton>
        <CustomButton > GO TO CHECKOUT</CustomButton>
    </div>)
}
const mapStateToProps=({cartReducer:{cartItems}})=>({
cartItems:cartItems
})


const mapDispatchToProps = dispatch=>({
    toggleCartHiddenAA:()=>dispatch(toggleCartHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown)