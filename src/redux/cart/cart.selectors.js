import {createSelector} from "reselect"

const selectCart = state=>state.cartReducer
const selectUser = state=>state.user
export const selectCartItems=createSelector(
    [selectCart,selectUser],(cart,user)=>cart.cartItems
)

export const selectCartItemsCount=createSelector(

    [selectCartItems],  cartItems  => cartItems.
    reduce((accumularedQuantity, cartItem) => accumularedQuantity + cartItem.quantity,
    0)
)



// const mapStateToProps = ({cartReducer: {cartItems}}) => ({
//     itemCount: cartItems.reduce(
//         (accumularedQuantity, cartItem) => accumularedQuantity + cartItem.quantity,
//         0)
// })