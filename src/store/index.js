import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import cartModalReducer from './cart-modal-slice';
import wishlistReducer from "./wishlist-slice";


const store = configureStore({
    reducer: { cart: cartReducer, cartModal: cartModalReducer, wishList: wishlistReducer }
});

export default store;