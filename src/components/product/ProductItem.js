import classes from './ProductItem.module.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../../store/cart-slice';

import ProductItemSpinner from '../UI/ProductItemSpinner';
import icon from '../../assets/sprite.svg';


const ProductItem = (props) => {
    const [isLoading, setIsloading] = useState(false);

    const dispatch = useDispatch();
    const notification = useSelector(state => state.cartModal.notification);
    
    const { id, img, description, price } = props;

    const addToCartHandler = () => {
        if (isLoading) return;  // if we are already loading an item, return!
        setIsloading(true);

        dispatch(cartActions.addItemToCart({
            id,
            img,
            description,
            price,
            amount: 1
        }));
    };

    useEffect(() => {  // this effect is for the product loading spinner state

        if (notification) {  // notification is falsy by (default) in the redux store
            setIsloading(false);
        };

    }, [notification]);

    return (
        <div className={classes.item}>
            <Link to={`/${id}`} className={classes['item__detail']}>
                <img src={props.img} alt="img" className={classes['item-img']} />
            </Link>

            <button className={classes['item__btn--heart']}>
                <svg className={classes['item__icon-heart']}>
                    <use xlinkHref={`${icon}#icon-heart`} />
                </svg>
            </button>

            <button className={classes['item__btn--cart']} onClick={addToCartHandler}>
                {!isLoading && <svg className={classes['item__icon-cart']}>
                    <use xlinkHref={`${icon}#icon-shopping-cart`} />
                </svg>}
                {!isLoading && <span class={classes['item__btn--invisible']}>ADD TO CART</span>}
                {isLoading && <ProductItemSpinner />}
            </button>

            <h3 className={classes.detail}>{props.description}</h3>

            <p className={classes.price}>${props.price}</p>
        </div>
    )
}

export default ProductItem;