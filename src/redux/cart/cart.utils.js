export const addItemToCart= (cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(
         cartItem=>cartItem.id===cartItemToAdd.id
    )
    if (existingCartItem){
        return cartItems.map(cartItem=>
        cartItem.id===cartItemToAdd.id
            ? {...cartItem,quantity:cartItem.quantity+1}
            : cartItem
        )
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}


export const removeItemFromCart= (cartItems,cartItemRemove)=>{
    // console.log(cartItems,'cartItems')
     const existingCartItem=cartItems.filter(
          cartItem=>   cartItem.name!==cartItemRemove
     )
  
     return existingCartItem
 }


 export const increasingQuantityReducer= (cartItems,cartItemToAdd)=>{
     console.log(cartItems,cartItemToAdd);
      const existingCartItem=cartItems.map(
         cartItem=>{
            if (cartItem.name===cartItemToAdd) 
            return   {...cartItem,quantity:cartItem.quantity+1}
            else {return cartItem}
        }
    )
    return existingCartItem
}

export const decreasingQuantityReducer= (cartItems,cartItemToAdd)=>{
    console.log(cartItems,cartItemToAdd);
     let existingCartItem=cartItems.map(
        cartItem=>{
           if (cartItem.name===cartItemToAdd) {
                return   {...cartItem,quantity:cartItem.quantity-1}
            }
           
           else {return cartItem}
       }
   )

   existingCartItem= existingCartItem.filter(cartItem=>cartItem.quantity!==0)
   return existingCartItem
}

