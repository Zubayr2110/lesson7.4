import { createSlice } from "@reduxjs/toolkit";
import data from'../data'

const initialState = {
    amount: 0,
    total: 0,
    cart: data,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducer: {
        clearCart: (state) => {
            state.cart = []
        },
        inc: (state) => {
            state.amount + 1
        },
        dec: (state) => {
            state.amount - 1
        }
    }
})


export default cartSlice.reducer;

export const { clearCart, inc, dec } = cartSlice.actions

export const { actions, reducer } = cartSlice;
