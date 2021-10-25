import React from "react"
import "./cart-dropdown.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps=()=>({

})
export default connect(mapStateToProps)(CartDropdown)