import classes from './ProductItem.module.css';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../../store/cart-slice';
import { wishlistActions } from '../../store/wishlist-slice';

import ProductItemSpinner from '../UI/ProductItemSpinner';
import icon from '../../assets/sprite.svg';


const ProductItem = (props) => {
    const [isLoading, setIsloading] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notification = useSelector(state => state.cartModal.notification);
    const wishlistItems = useSelector(state => state.wishList.items);
    const wishListUpdated = useSelector(state => state.cartModal.isSaved);

    const { id, img, description, price } = props; 

    const isExistingInWishlist = wishlistItems.find(cur => cur.id === id);

    const addToWishListHandler = () => {
        if(isExistingInWishlist) { // if a wishlist item exist already
            navigate('/wishlist');
            return;
        };  

        if(isAdding) return;  // if its loading
        setIsAdding(true);


        dispatch(wishlistActions.addToWishlist({
            id,
            img,
            description,
            price,
            amount: 1
        }));
    };

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

    useEffect(() => {  // this effect is for stopping the wishList loading spinner state

        if (wishListUpdated) {  // wishListUpdated is falsy by (default) in the redux store
            setIsAdding(false);
        };

    }, [wishListUpdated]);   

    useEffect(() => {  // this effect is for stopping the product loading spinner state

        if (notification) {  // notification is falsy by (default) in the redux store
            setIsloading(false);
        };

    }, [notification]);

    return (
        <div className={classes.item}>
            <Link to={`/${id}`} className={classes['item__detail']}>
                <img src={props.img} alt="img" className={classes['item-img']} />
            </Link>

            <button className={classes['item__btn--heart']} onClick={addToWishListHandler}>
                {!isAdding && !isExistingInWishlist && <svg className={classes['item__icon-heart']}>
                    <use xlinkHref={`${icon}#icon-heart`} />
                </svg>}
                {isAdding && <ProductItemSpinner type='wishlist' />}
                {isExistingInWishlist && !isAdding && <svg className={classes["icon-check"]}>
                    <use xlinkHref={`${icon}#icon-check`} />
                </svg>}
            </button>

            <button className={classes['item__btn--cart']} onClick={addToCartHandler}>
                {!isLoading && <svg className={classes['item__icon-cart']}>
                    <use xlinkHref={`${icon}#icon-shopping-cart`} />
                </svg>}
                {!isLoading && <span class={classes['item__btn--invisible']}>ADD TO CART</span>}
                {isLoading && <ProductItemSpinner type='cart' />}
            </button>

            <h3 className={classes.detail}>{props.description}</h3>

            <p className={classes.price}>${props.price}</p>
        </div>
    );
}

export default ProductItem;