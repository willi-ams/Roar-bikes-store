import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import styles from './Layout.module.css';
import Cart from '../cart/Cart';
import Navigation from './Navigation';
import Notification from '../UI/Notification';
import Footer from './Footer' ;
import { cartModalActions } from '../../store/cart-modal-slice';
import { sendCartData } from '../../store/cart-actions';
import { getCartData } from '../../store/cart-actions';
import MobileNavigation from './MobileNavigation';

let isInitial = true;

const Layout = (props) => {
    const dispatch = useDispatch();
    const cartPageIsActive = useSelector(state => state.cartModal.cartPageIsActive);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.cartModal.notification);
    
    const [cartIsClicked, setCartIsClicked] = useState(false);

    useEffect(() => {  // this effect if for fetching d cart data and updating it
        dispatch(getCartData());
    }, [dispatch]);

    useEffect(() => {  // this effect runs whenever d cart changes and sends d cart data to d database.
        if (isInitial) {
            isInitial = false;
            return;
        };

        if (cart.changed) dispatch(sendCartData(cart));

        const timer = setTimeout(() => {
            dispatch(cartModalActions.setNotification(null));
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [cart, dispatch]);

    const closeNotificationHandler = () => {
        dispatch(cartModalActions.setNotification(null));
    };

    const showCartHandler = () => {
        if (cartPageIsActive) return;  // this logic runs, if we are on d cart page, the cart modal wont show
        setCartIsClicked(true);
    };

    const hideCartHandler = () => {
        setCartIsClicked(false)
    };
  
    return (
        <Fragment>
            {cartIsClicked && !cartPageIsActive && <Cart onClose={hideCartHandler} />}
            <header className={styles.header}>
                {notification && <Notification status={notification.status} message={notification.message} onClose={closeNotificationHandler} />}
                <Navigation onShowCart={showCartHandler} />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
            <MobileNavigation onShowCart={showCartHandler} />
        </Fragment>
    );
}

export default Layout;