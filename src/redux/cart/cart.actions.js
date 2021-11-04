import {ADD_ITEM, TOGGLE_CART_HIDDEN,REMOVE_ITEM_FROM_CART,INCREASING_QUANTITY,DECREASING_QUANTITY} from "./cart.types"


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

export const increasingQuantityCartAction=(item)=>({
    type: INCREASING_QUANTITY,
    payload: item
})

export const decreasingQuantityCartAction=(item)=>({
    type: DECREASING_QUANTITY,
    payload: item
})

