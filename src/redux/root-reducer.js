import userReducer from "./user/user.reducer";
import {combineReducers} from "redux";
import cartReducer from "./cart/cart.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    cartReducer:cartReducer
})
export  default rootReducer