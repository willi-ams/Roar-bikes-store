import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cart-slice';

import icon from '../../assets/sprite.svg';
import classes from './ProductItem.module.css';


const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { id, img, description, price } = props;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            img,
            description,
            price,
            amount: 1
        }));
    }

    return (
        <div className={classes.item}>
            <Link to={props.id} className={classes['item__detail']}>
                <img src={props.img} alt="img" className={classes['item-img']} />
            </Link>

            <button className={classes['item__btn--heart']}>
                <svg className={classes['item__icon-heart']}>
                    <use xlinkHref={`${icon}#icon-heart`} />
                </svg>
            </button>

            <button className={classes['item__btn--cart']} onClick={addToCartHandler}>
                <svg className={classes['item__icon-cart']}>
                    <use xlinkHref={`${icon}#icon-shopping-cart`} />
                </svg>
                <span class={classes['item__btn--invisible']}>ADD TO CART</span>
            </button>

            <h3 className={classes.detail}>{props.description}</h3>

            <p className={classes.price}>${props.price}</p>
        </div>
    )
}

export default ProductItem;