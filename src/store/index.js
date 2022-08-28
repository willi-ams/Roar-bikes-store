import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import cartModalReducer from './cart-modal-slice';


const store = configureStore({
    reducer: { cart: cartReducer, cartModal: cartModalReducer }
});

export default store;