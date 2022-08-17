import { useSelector } from 'react-redux/es/exports';

import styles from './CartButton.module.css';
import icon from '../../assets/sprite.svg';

const CartButton = (props) => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    
    return (
        <button className={styles['user-btn']} onClick={props.onClick}>
            <svg className={styles['nav-icon']}>
                <use xlinkHref={`${icon}#icon-shopping-cart`} />
            </svg>
            <span className={styles['nav-icon__notification']}>{totalQuantity}</span>
        </button>
    );
}

export default CartButton;