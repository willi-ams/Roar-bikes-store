import { cartModalActions } from "./cart-modal-slice";
import { cartActions } from "./cart-slice";

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


export const sendCartData = (cartData) => {

    return async (dispatch) => {

        cartModalActions.setNotification(null);
        
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