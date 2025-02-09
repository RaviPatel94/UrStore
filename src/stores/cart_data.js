import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const {productId, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId, quantity})
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }else{
                // delete state.items[indexProductId];
                state.items = (state.items).filter(item=> item.productId !== productId);
                
            }
        }
    }
});

export const { addItem, removeItem, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer; // 
