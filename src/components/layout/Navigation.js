import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Navigation.module.css';
import icons from "../../assets/sprite.svg";

const Navigation = (props) => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const savedItemsTotal = useSelector((state) => state.wishList.totalItems);
    const navigate = useNavigate();

    const showSavedItemsHandler = () => {
        navigate('/wishlist');
    };

    return (
        <nav className={styles.nav}>
            <button className={styles['menu-btn']} onClick={props.onShowMenu}>
                <svg className={styles['menu-icon']}>
                    <use xlinkHref={`${icons}#icon-menu`} />
                </svg>
                <span>menu</span>
            </button>

            <h1>Roar Bikes</h1>

            <ul>
                <li><NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
                <li><NavLink to='/road-bikes' className={({ isActive }) => isActive ? styles.active : ''}>Road bikes</NavLink></li>
                <li><NavLink to='/mountain-bikes' className={({ isActive }) => isActive ? styles.active : ''} >Mountain bikes</NavLink></li>
                <li><NavLink to='/folding-bikes' className={({ isActive }) => isActive ? styles.active : ''}>Folding bikes</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink></li>
            </ul>

            <div className={styles['user-icons-box']}>
                <button className={styles['user-btn']}>
                    <svg className={styles['nav-icon']}>
                        <use xlinkHref={`${icons}#icon-user`} />
                    </svg> 
                </button>

                <button className={styles['user-btn']} onClick={showSavedItemsHandler}>
                    <svg className={styles['nav-icon']}>
                        <use xlinkHref={`${icons}#icon-heart`} />
                    </svg>
                    <span className={styles['nav-icon__notification']}>{savedItemsTotal}</span>
                </button> 

                <button className={styles['user-btn']} onClick={props.onShowCart}>
                    <svg className={styles['nav-icon']}>
                        <use xlinkHref={`${icons}#icon-shopping-cart`} />
                    </svg>
                    <span className={styles['nav-icon__notification']}>{totalQuantity}</span>
                </button>
            </div>
        </nav>
    );
}

export default Navigation;