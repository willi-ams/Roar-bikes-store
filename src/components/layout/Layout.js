import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import Cart from '../cart/Cart';
import Menu from '../menu/Menu';
import Navigation from './Navigation';
import Notification from '../UI/Notification';
import Footer from './Footer';
import { cartModalActions } from '../../store/cart-modal-slice';
import { sendWishlistData } from '../../store/cart-actions';
import { sendCartData } from '../../store/cart-actions';
import { getWishlistData } from '../../store/cart-actions';
import { getCartData } from '../../store/cart-actions';
import MobileNavigation from './MobileNavigation';

import styles from './Layout.module.css';

let isInitial = true;
let isLoaded = true;

const Layout = (props) => {
    const dispatch = useDispatch();
    const cartPageIsActive = useSelector((state) => state.cartModal.cartPageIsActive);
    const cart = useSelector((state) => state.cart);
    const wishListData = useSelector((state) => state.wishList);
    const notification = useSelector((state) => state.cartModal.notification);

    const [cartIsClicked, setCartIsClicked] = useState(false);
    const [menuIsClicked, setMenuIsClicked] = useState(false);

    useEffect(() => {
        // this effect if for fetching d cart data and updating it
        dispatch(getCartData());
    }, [dispatch]);

    useEffect(() => {
        // this effect if for fetching d wishList data and updating it
        dispatch(getWishlistData());
    }, [dispatch]);

    useEffect(() => {
        // this effect runs whenever d wishlist items changes and sends d data to d database.
        if (isLoaded) {
            isLoaded = false;
            return;
        }

        dispatch(sendWishlistData(wishListData));
    }, [wishListData, dispatch]);

    useEffect(() => {
        // this effect runs whenever d cart changes and sends d cart data to d database.
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    useEffect(() => {
        // this effect runs whenever the cart changes and there is a notification
        if (isInitial) {
            // remember it dosent work here
            isInitial = false;
            return;
        }

        const timer = setTimeout(() => {
            dispatch(cartModalActions.setNotification(null));
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, [notification, dispatch]);

    const closeNotificationHandler = () => {
        dispatch(cartModalActions.setNotification(null));
    };

    const showMenuHandler = () => {
        setMenuIsClicked(true);
    };

    const hideMenuHandler = () => {
        setMenuIsClicked(false);
    };

    const showCartHandler = () => {
        if (cartPageIsActive) return; // this logic runs, if we are on d cart page, the cart modal wont show
        setCartIsClicked(true);
    };

    const hideCartHandler = () => {
        setCartIsClicked(false);
    };

    return (
        <Fragment>
            {cartIsClicked && !cartPageIsActive && <Cart onClose={hideCartHandler} />}
            {menuIsClicked && <Menu onClose={hideMenuHandler} />}
            <header className={styles.header}>
                {notification && (
                    <Notification
                        status={notification.status}
                        message={notification.message}
                        onClose={closeNotificationHandler}
                    />
                )}
                <Navigation onShowMenu={showMenuHandler} onShowCart={showCartHandler} />
            </header>
            <main>{props.children}</main>
            <footer>
                <Footer />
            </footer>
            <MobileNavigation onShowCart={showCartHandler} />
        </Fragment>
    );
};

export default Layout;
