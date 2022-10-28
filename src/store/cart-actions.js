import { cartModalActions } from "./cart-modal-slice";
import { cartActions } from "./cart-slice";
import { wishlistActions } from "./wishlist-slice";

export const getCartData = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://roarbikes-store-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) throw new Error();

            const data = await response.json();

            dispatch(cartActions.replaceCart({
                items: data.items || [],  // if data.items is falsy, we return an empty array
                totalAmount: data.totalAmount,
                totalQuantity: data.totalQuantity
            }));

        } catch (error) {
            alert('Error getting cart data!');
        }
    }
};


export const getWishlistData = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://roarbikes-store-default-rtdb.firebaseio.com/wishlist.json');

            if (!response.ok) throw new Error();

            const data = await response.json();

            dispatch(wishlistActions.replaceOldItems({
                items: data.items || [],  // if data.items is falsy, we return an empty array
                totalItems: data.totalItems,
            }));

        } catch (error) {
            console.log(error.message);
        }
    }
};


export const sendCartData = (cartData) => {

    return async (dispatch) => {

        cartModalActions.setNotification(null);  // no notification
        
        try {
            const response = await fetch('https://roarbikes-store-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartData),
            });

            if (!response.ok) throw new Error('Error updating cart!');

            dispatch(cartModalActions.setNotification({
                status: 'complete',
                message: 'Cart sucessfully updated'
            }));

        } catch (error) {
            dispatch(cartModalActions.setNotification({
                status: 'error',
                message: 'Error updating cart!'
            }));
        }
    }
};


export const sendWishlistData = (data) => {

    return async (dispatch) => {

        cartModalActions.setIsSaved(null);

        try {
            const response = await fetch('https://roarbikes-store-default-rtdb.firebaseio.com/wishlist.json', {
                method: 'PUT',
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Error updating data!');

            dispatch(cartModalActions.setIsSaved({
                status: "complete",
                message: "Cart sucessfully updated",
            }));

        } catch (error) {
            dispatch(cartModalActions.setIsSaved({
                status: "error",
                message: "Error updating cart!",
            }));
        }
    }
};