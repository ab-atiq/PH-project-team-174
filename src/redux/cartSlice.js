import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart: [],
    wishlist: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        addToCart: (state, {payload}) => {
            const existingItem = state.cart.find(item => item._id === payload._id);
                if(!existingItem) {
                    state.cart.push({...payload, quantity: 1});
                } else {
                    existingItem.quantity += 1;
                }
            },
        removerFromCart: (state, { payload }) => {
            const filteredItems = state.cart.filter(item => item._id !== payload);
            state.cart = filteredItems;
        },
        addProducts: (state, {payload}) => {
            state.products = payload;
        }
    },
});

export const { addToCart, removerFromCart, addProducts } = cartSlice.actions;

export default cartSlice.reducer;
