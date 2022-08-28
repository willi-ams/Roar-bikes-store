import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import Cart from '../cart/Cart';
import Navigation from './Navigation';
import Footer from './Footer' ;
import styles from './Layout.module.css';

const Layout = (props) => {
    const cartPageIsActive = useSelector(state => state.cartModal.cartPageIsActive);
    
    const [cartIsClicked, setCartIsClicked] = useState(false);

    const showCartHandler = () => {
        if (cartPageIsActive) return;
        setCartIsClicked(true);
    };

    const hideCartHandler = () => {
        setCartIsClicked(false)
    };
  
    return (
        <Fragment>
            {cartIsClicked && !cartPageIsActive && <Cart onClose={hideCartHandler} />}
            <header className={styles.header}>
                <Navigation onShowCart={showCartHandler} />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}

export default Layout;