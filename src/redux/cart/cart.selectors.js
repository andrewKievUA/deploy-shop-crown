import {createSelector} from "reselect"

const selectCart = state=>state.cartReducer
const selectUser = state=>state.user
export const selectCartItems=createSelector(
       [selectCart],(cart)=>{
      return  cart.cartItems
       }
)

export const selectCardHidden =createSelector(
    [selectCart],
    cart=>{
        return  cart.hidden
         }
)


export const selectCartItemsCount=createSelector(
    [selectCartItems],  cartItems  => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],  cartItems  => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.price * cartItem.quantity,
    0)
)

