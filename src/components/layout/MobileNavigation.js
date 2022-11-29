import styles from './MobileNavigation.module.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/sprite.svg';

const MobileNavigation = (props) => {
    const navigate = useNavigate();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const wishlistItemsAmount = useSelector((state) => state.wishList.totalItems);

    const showSavedItemsHandler = () => {
        navigate('/wishlist');
    };

    const linkToHomeHandler = () => {
        navigate('/');
    };

    return (
        <section className={styles['mobile-nav']}>
            <button className={styles['user-btn']} onClick={linkToHomeHandler}>
                <svg className={styles['nav-icon']}>
                    <use xlinkHref={`${icon}#icon-home`} />
                </svg>
                <span className={styles['icon-text']}>Shop</span>
            </button>

            <button className={styles['user-btn']} onClick={showSavedItemsHandler}>
                <svg className={styles['nav-icon']}>
                    <use xlinkHref={`${icon}#icon-heart`} />
                </svg>
                <span className={styles['nav-icon__notification']}>{wishlistItemsAmount}</span>
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
    );
};

export default MobileNavigation;
