import { useSelector } from 'react-redux';
import CartPageTotals from './CartPageTotals';

import CartPageItem from './CartPageItem';
import classes from './CartPage.module.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // if (cartItems.length === 0) {

  //   return (
  //     <
  //   )
  // }

  return (
    <section className={classes["section__cart--page"]}>
      <div className={classes["cart-main"]}>
        <table>
          <thead>
            <tr className={classes.head}>
              <th className={classes["product-remove"]}>&nbsp;</th>
              <th className={classes["product-thumbnail"]}>&nbsp;</th>
              <th className={classes["product-name"]}>Product</th>
              <th className={classes["product-price"]}>Price</th>
              <th className={classes["product-quantity"]}>Quantity</th>
              <th className={classes["product-subtotal"]}>subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((curItem) => (
              <CartPageItem
                key={curItem.id}
                id={curItem.id}
                img={curItem.img}
                itemTotalPrice={curItem.itemTotalPrice}
                price={curItem.price}
                quantity={curItem.quantity}
                description={curItem.description}
              />
            ))}
          </tbody>
        </table>

        <div className={classes['coupon-box']}>
          <input type="text" placeholder='Coupon code'/>
          <button>Apply Coupon</button>
        </div>
      </div>

      <CartPageTotals />
    </section>
  );

};

export default CartPage;  