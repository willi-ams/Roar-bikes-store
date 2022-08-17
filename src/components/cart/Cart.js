import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Modal from "../UI/Modal";
import icon from "../../assets/sprite.svg";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";


const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items);
    const catrTotalAmount = useSelector((state) => state.cart.totalAmount);
    console.log(cartItems);

    return (
      <Modal onClose={props.onClose}>
        <div className={classes.head}>
          <h2>Shopping Cart</h2>
          <button className={classes["cancel-btn"]} onClick={props.onClose}>
            <svg className={classes["cancel-icon"]}>
              <use xlinkHref={`${icon}#icon-x`} />
            </svg>
          </button>
        </div>

        <div className={classes.content}>
          <ul>
            {cartItems.map((curItem) => (
              <CartItem
                key={curItem.id}
                id={curItem.id}
                img={curItem.img}
                description={curItem.description}
                price={curItem.price}
                itemTotalPrice={curItem.itemTotalPrice}
                quantity={curItem.quantity}
              />
            ))}
          </ul>

          {cartItems.length === 0 && <div className={classes["no-cart"]}>
            <div className={classes["no-cart--box"]}>
              <svg className={classes["icon-nocart"]}>
                <use xlinkHref={`${icon}#icon-remove_shopping_cart`} />
              </svg>
              <p>No products in the cart.</p>
            </div>

            <button onClick={props.onClose}>Return to shop</button>
          </div>}
        </div>

        {cartItems.length > 0 && (
          <div className={classes.total}>
            <div className={classes["total--box"]}>
              <h3>Subtotal:</h3>
              <span>${catrTotalAmount}</span>
            </div>
            <Link to="/cart">View Cart</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        )}
      </Modal>
    );
};

export default Cart;
