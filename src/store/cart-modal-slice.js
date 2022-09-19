import { createSlice } from "@reduxjs/toolkit";

const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState: { cartPageIsActive: null, notification: null },
    reducers: {
        setDisplayTrue(state) {
            state.cartPageIsActive = false;
        },
        setDisplayFalse(state) {
            state.cartPageIsActive = true;
        },
        setNotification (state, action) {
            state.notification = action.payload;
            // console.log(action.payload);
        }
    }
});


export const cartModalActions = cartModalSlice.actions;

export default cartModalSlice.reducer;