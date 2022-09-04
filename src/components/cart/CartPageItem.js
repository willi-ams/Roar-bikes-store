import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartPageItem.module.css";
import cancelIcon from "../../assets/sprite.svg";

const CartPageItem = (props) => {
    const dispatch = useDispatch();

    const { id, img, itemTotalPrice, price, quantity, description } = props;

    const formattedItemTotalPrice = itemTotalPrice.toLocaleString();

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            img,
            description,
            price,
            amount: 1
        }));
    };

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemQuantityFromCart(id));
    };

    const removeWholeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <tr className={classes["cart-item"]}>
            <td className={classes['cancel-btn-box']}>
                <button onClick={removeWholeItemHandler}>
                    <svg className={classes["cancel-icon"]}>
                        <use xlinkHref={`${cancelIcon}#icon-x`} />
                    </svg>
                </button>
            </td>
            <td className={classes['img-link-box']}>
                <div className={classes['img-link']}>
                    <img src={img} alt={description} />
                </div>
            </td>
            <td className={classes['description-box']}>
                <Link to={`/${id}`}>{description}</Link>
            </td>
            <td className={classes['price-box']}>
                <span className={classes.price}>${price}</span>
            </td>
            <td className={classes['counter-box']}>
                <div className={classes["counter"]}>
                    <button className={classes.dec} onClick={removeItemHandler}>-</button>
                    <span className={classes.quantity}>{quantity}</span>
                    <button className={classes.inc} onClick={addItemHandler}>+</button>
                </div>
            </td>
            <td className={classes['total-price-box']}>
                <p className={classes['total-price']}>${formattedItemTotalPrice}</p>
            </td>
        </tr>
    );
};

export default CartPageItem; 
