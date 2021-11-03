import {ADD_ITEM, TOGGLE_CART_HIDDEN,REMOVE_ITEM_FROM_CART} from "./cart.types"


export const toggleCartHidden =()=>({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = item=>({
    type: ADD_ITEM,
    payload: item
})

export const removeItemFromCartAction=(item)=>({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
})