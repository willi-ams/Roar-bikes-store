import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action) {
            state.totalQuantity += action.payload.amount;
            const newItem = action.payload;
            const existingItem = state.items.find(curItem => curItem.id === newItem.id);  // returns d value of d item if it exist, otherwise undefined

            if (!existingItem) {  // if d item does not exist (undefined)
                state.items.push({
                    id: newItem.id,
                    img: newItem.img,
                    description: newItem.description,
                    price: newItem.price,
                    // amount: newItem.amount,  for d amount we added
                    itemTotalPrice: newItem.price * newItem.amount,
                    quantity: newItem.amount  // 1st time one quantity
                });
            } else {
                existingItem.quantity += newItem.amount; // here we are updating the previous state item quantity also.
                existingItem.itemTotalPrice = (existingItem.price * existingItem.quantity); // update d price of d existing item
            }

            state.totalAmount += (action.payload.price * action.payload.amount);
        },
        removeItemQuantityFromCart(state, action) {
            state.totalQuantity -= 1;
            const id = action.payload;   
            const item = state.items.find(curItem => curItem.id === id);  // finds d cart item with d current id

            if (item.quantity === 1) {
                state.items = state.items.filter(curItem => curItem.id !== id);
            } else {
                item.quantity -= 1;
                item.itemTotalPrice -= item.price;
            }

            state.totalAmount -= item.price;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const item = state.items.find(curItem => curItem.id === id);
            
            state.totalQuantity -= item.quantity;
            // state.totalAmount -= (item.price * item.quantity);
            state.totalAmount -= item.itemTotalPrice;  // gets d updated total amount by subtracting d totalAmount with the itemTotalPrice
            state.items = state.items.filter(curItem => curItem.id !== id);  // remove the selected item
        },

    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
