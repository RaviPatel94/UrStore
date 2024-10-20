import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart_data';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: ..
    }
})