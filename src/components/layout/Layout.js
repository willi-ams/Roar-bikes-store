import { Fragment, useState } from 'react';

import Cart from '../cart/Cart';
import Navigation from './Navigation';
import Footer from './Footer' ;
import styles from './Layout.module.css';

const Layout = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false)
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
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