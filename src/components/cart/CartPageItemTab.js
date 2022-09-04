import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './CartPageItemTab.module.css';
import { cartActions } from '../../store/cart-slice';
import cancelIcon from "../../assets/sprite.svg";

const CartPageItemTab = (props) => {
    const dispatch = useDispatch();

    const { id, img, itemTotalPrice, price, quantity, description } = props;

    const formattedItemTotalPrice = itemTotalPrice.toLocaleString();

    const addItemHandler = () => {
      dispatch(
        cartActions.addItemToCart({
          id,
          img,
          description,
          price,
          amount: 1,
        })
      );
    };

    const removeItemHandler = () => {
      dispatch(cartActions.removeItemQuantityFromCart(id));
    };

    const removeWholeItemHandler = () => {
      dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <li className={styles['cart-item']}>
            <Link to={`/${id}`} className={styles['img-box']}>
                <img src={img} alt={description} className={styles.img} />
            </Link>

            <div className={styles["detail-box"]}>
                <div className={styles["detail-box-item"]}>
                    <Link to={`/${id}`} className={styles['description-text']}>{description}</Link>

                    <button className={styles.cancel} onClick={removeWholeItemHandler}>
                        <svg className={styles["cancel-icon"]}>
                            <use xlinkHref={`${cancelIcon}#icon-x`} />
                        </svg>
                    </button>
                </div>

                <div className={styles["detail-box-item"]}>
                    <span className={styles.amount}>Price</span>
                    <span className={styles.price}>${price}</span>
                </div>

                <div className={styles["detail-box-item"]}>
                    <span className={styles.quantity}>Quantity</span>

                    <div className={styles["counter"]}>
                        <button className={styles.dec} onClick={removeItemHandler}>-</button>
                        <span className={styles.quantity}>{quantity}</span>
                        <button className={styles.inc} onClick={addItemHandler}>+</button>
                    </div>
                </div>

                <div className={styles["detail-box-item"]}>
                    <span className={styles.total}>Subtotal</span>

                    <p className={styles['total-price']}>${formattedItemTotalPrice}</p>
                </div>
            </div>
        </li>
    )
};

export default CartPageItemTab;

