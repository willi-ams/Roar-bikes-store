import { useState, useEffect } from 'react';
import styles from './ProductView.module.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import ProductForm from './ProductForm';
import ProductItemSpinner from '../UI/ProductItemSpinner';
import { wishlistActions } from '../../store/wishlist-slice';

import icon from '../../assets/sprite.svg';

const ProductView = (props) => {
    const { id, image: img, description, price } = props.product;
    const [isAdding, setIsAdding] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishList.items);
    const wishListUpdated = useSelector((state) => state.cartModal.isSaved);

    const isExistingInWishlist = wishlistItems.find((cur) => cur.id === props.product.id);

    const addToCartHandler = (amount) => {
        dispatch(
            cartActions.addItemToCart({
                id: props.product.id,
                img: props.product.image,
                description: props.product.description,
                price: props.product.price,
                amount: amount,
            })
        );
    };

    const addToWishListHandler = () => {
        if (isExistingInWishlist) {
            // if the item exists in the wishlist already
            navigate('/wishlist');
            return;
        }

        if (isAdding) return; // if its loading
        setIsAdding(true);

        dispatch(
            wishlistActions.addToWishlist({
                id,
                img,
                description,
                price,
                amount: 1,
            })
        );
    };

    useEffect(() => {
        // this effect is for stopping the wishList loading spinner state

        if (wishListUpdated) {
            // wishListUpdated is falsy by (default) in the redux store
            setIsAdding(false);
        }
    }, [wishListUpdated]);

    return (
        <div className={styles['product-view']}>
            <div className={styles['img-box']}>
                <img src={props.product.image} alt={props.product.description} />
            </div>

            <div className={styles['view-box']}>
                <h2>{props.product.description}</h2>
                <p className={styles.price}>${props.product.price}</p>
                <ProductForm onAddToCart={addToCartHandler} />
                {!isExistingInWishlist && !isAdding && (
                    <button className={styles['wishlist-btn']} onClick={addToWishListHandler}>
                        <svg className={styles['wishlist-icon']}>
                            <use xlinkHref={`${icon}#icon-heart`} />
                        </svg>
                        <span className={styles['span-text']}>Add to wishlist</span>
                    </button>
                )}
                {isAdding && (
                    <button className={styles['wishlist-btn']} onClick={addToWishListHandler}>
                        <span className={styles['spinner']}>
                            <ProductItemSpinner />
                        </span>
                        <span className={styles['span-text']}>Add to wishlist</span>
                    </button>
                )}
                {isExistingInWishlist && !isAdding && (
                    <button className={styles['wishlist-btn']} onClick={addToWishListHandler}>
                        <svg className={styles['wishlist-icon']}>
                            <use xlinkHref={`${icon}#icon-check`} />
                        </svg>
                        <span className={styles['span-text']}>Added to wishlist</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductView;
