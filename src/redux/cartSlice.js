import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    wishlist: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        addToCart: (state, {payload}) => {
            const existingItem = state.cart.find(item => item.id === payload.id);
                if(existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.cart.push({...payload, quantity: 1});
                }
            },
        removerFromCart: (state, {payload}) => {
            const filteredItems = state.cart.filter(item => item.id !== payload.id);
            state.cart = filteredItems;
        }
    },
});

export const { addToCart, removerFromCart } = cartSlice.actions;

export default cartSlice.reducer;
