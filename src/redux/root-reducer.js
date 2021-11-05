import userReducer from "./user/user.reducer";
import {combineReducers} from "redux";
import cartReducer from "./cart/cart.reducer";
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:"root",
    storage,
    whitelist:["cartReducer"]
} 

const rootReducer = combineReducers({
    user: userReducer,
    cartReducer:cartReducer
})


export  default persistReducer(persistConfig,rootReducer)