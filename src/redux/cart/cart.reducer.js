import {TOGGLE_CART_HIDDEN,ADD_ITEM} from "./cart.types";
//import CartActionTypes from "./cart.actions";

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type){
        case TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                state,
                cartItems: [...state.cartItems, action.payload]
            }
        default : return  state
    }
}

export default cartReducer