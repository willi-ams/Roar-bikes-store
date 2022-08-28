import { createSlice } from "@reduxjs/toolkit";

const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState: { cartPageIsActive: null },
    reducers: {
        setDisplayTrue(state) {
            state.cartPageIsActive = false;
        },
        setDisplayFalse(state) {
            state.cartPageIsActive = true;
        }
    }
});


export const cartModalActions = cartModalSlice.actions;

export default cartModalSlice.reducer;