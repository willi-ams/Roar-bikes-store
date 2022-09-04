import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import ProductForm from './ProductForm';

import icon from '../../assets/sprite.svg';
import styles from './ProductView.module.css';

const ProductView = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = (amount) => {

        dispatch(cartActions.addItemToCart({
            id: props.product.id,
            img: props.product.image,
            description: props.product.description,
            price: props.product.price,
            amount: amount
        }));
    };

    return (
        <div className={styles['product-view']}>
            <div className={styles["img-box"]}>
                <img src={props.product.image} alt={props.product.description} />
            </div>

            <div className={styles['view-box']}>
                <h2>{props.product.description}</h2>
                <p className={styles.price}>${props.product.price}</p>
                <ProductForm onAddToCart={addToCartHandler} />
                <button className={styles['wishlist-btn']}>
                    <svg className={styles['wishlist-icon']}>
                        <use xlinkHref={`${icon}#icon-heart`} />
                    </svg>
                    <span className={styles['span-text']}>Add to wishlist</span>
                </button>
            </div>
        </div>
    )
}

export default ProductView;