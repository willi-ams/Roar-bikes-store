import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartPageItem.module.css";
import cancelIcon from "../../assets/sprite.svg";

const CartPageItem = (props) => {
    const dispatch = useDispatch();

    const { id, img, itemTotalPrice, price, quantity, description } = props;

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
            <td>
                <button onClick={removeWholeItemHandler}>
                    <svg className={classes["cancel-icon"]}>
                        <use xlinkHref={`${cancelIcon}#icon-x`} />
                    </svg>
                </button>
            </td>
            <td>
                <div className={classes['img-link']}>
                    <img src={img} alt={description} />
                </div>
            </td>
            <td className={classes['description-box']}>
                <Link to={id}>{description}</Link>
            </td>
            <td>
                <span className={classes.price}>${price}</span>
            </td>
            <td>
                <div className={classes["counter"]}>
                    <button className={classes.dec} onClick={removeItemHandler}>-</button>
                    <span className={classes.quantity}>{quantity}</span>
                    <button className={classes.inc} onClick={addItemHandler}>+</button>
                </div>
            </td>
            <td>
                <p className={classes['total-price']}>${itemTotalPrice}</p>
            </td>
        </tr>
    );
};

export default CartPageItem; 
