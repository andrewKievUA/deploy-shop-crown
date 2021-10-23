import {TOGGLE_CART_HIDDEN} from "./cart.types";
import CartActionTypes from "./cart.actions";

const INITIAL_STATE = {
    hidden:true
}


const cartReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type){
        case CartActionTypes:
            return{
                ...state,
                hidden: !state.hidden
            }
        default : return  state
    }
}