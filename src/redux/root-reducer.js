import userReducer from "./user/user.reducer";
import {combineReducers} from "redux";
import cartReducer from "./cart/cart.reducer";
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';


import directoryReducer from './directory/directory.reducer.js';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key:"root",
    storage,
    whitelist:["cartReducer"]
} 

const rootReducer = combineReducers({
    user: userReducer,
    cartReducer:cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})


export  default persistReducer(persistConfig,rootReducer)