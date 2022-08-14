import { Fragment } from 'react';

import Navigation from './Navigation';
import Footer from './Footer' ;
import styles from './Layout.module.css';

const Layout = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <Navigation />
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