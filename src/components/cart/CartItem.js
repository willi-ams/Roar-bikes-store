import { useDispatch } from 'react-redux/es/exports';
import { cartActions } from '../../store/cart-slice';

import classes from './CartItem.module.css';
import cancelIcon from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';


const CartItem = (props) => {
    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart(props.id));
    }

    return (
        <li className={classes.item}>
            <div className={classes["item-image-box"]}>
                <img src={props.img} alt="img" />
            </div>
            <div className={classes["item-content"]}>
                <Link to={props.id} className={classes['content']} onClick={props.onClick}>
                    <h4>{props.description}</h4>
                    <div className={classes['content-box']}>
                        <span className={classes['content-quantity']}>{props.quantity} x</span>
                        <span className={classes['content-amount']}>${props.price}</span>
                    </div>
                </Link>
                <button className={classes["cancel-btn"]} onClick={removeFromCartHandler}>
                    <svg className={classes['cancel-icon']}>
                        <use xlinkHref={`${cancelIcon}#icon-x`} />
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default CartItem;