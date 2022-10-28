import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
        totalItems: 0,
    },
    reducers: {
        replaceOldItems(state, action) {
            state.items = action.payload.items;
            state.totalItems = action.payload.totalItems;
        },
        addToWishlist(state, action) {
            const itemToBeAdded = action.payload;
            const existingItem = state.items.find(cur => cur.id === itemToBeAdded.id);  // checks if d item exist already
            state.totalItems += action.payload.amount;

            if (!existingItem) {
                state.items.push(itemToBeAdded);
            } else {
                return;
            }
        },
        removeFromWishList(state, action) {
            state.totalItems -= 1;
            const id = action.payload;
            state.items = state.items.filter(cur => cur.id !== id);
        }
    }
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
