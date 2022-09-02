import styles from './MobileNavigation.module.css';

import { useSelector } from 'react-redux';
import icon from '../../assets/sprite.svg';

const MobileNavigation = (props) => {

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <section className={styles['mobile-nav']}>

            <button className={styles['user-btn']}>
                <svg className={styles['nav-icon']}>
                    <use xlinkHref={`${icon}#icon-heart`} />
                </svg>
            <span className={styles['icon-text']}>Shop</span>
            </button>
            
            <button className={styles["user-btn"]}>
                <svg className={styles["nav-icon"]}>
                    <use xlinkHref={`${icon}#icon-heart`} />
                </svg>
                <span className={styles["nav-icon__notification"]}>0</span>
            <span className={styles['icon-text']}>Wishlist</span>
            </button>

            <button className={styles['user-btn']} onClick={props.onShowCart}>
                <svg className={styles['nav-icon']}>
                    <use xlinkHref={`${icon}#icon-shopping-cart`} />
                </svg>
                <span className={styles['nav-icon__notification']}>{totalQuantity}</span>
            <span className={styles['icon-text']}>Cart</span>
            </button>

            <button className={styles['user-btn']}>
                <svg className={styles['nav-icon']}>
                    <use xlinkHref={`${icon}#icon-user`} />
                </svg>
            <span className={styles['icon-text']}>My acount</span>
            </button>
        </section>
    )
};

export default MobileNavigation;