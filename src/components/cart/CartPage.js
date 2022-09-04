import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartPageTotals from './CartPageTotals';
import CartPageEmpty from './CartPageEmpty';

import useHttp from '../../hooks/use-http';
import { getAllProducts } from '../../lib/api';
import ProductList from '../product/ProductList';
import LoadingSpinner from '../layout/LoadingSpinner';

import CartPageItem from './CartPageItem';
import CartPageItemTab from './CartPageItemTab';
import classes from './CartPage.module.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const { sendRequest, status, data: products, error } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);


  if (cartItems.length === 0) {
    return (
      <CartPageEmpty />
    )
  };

  let optionalList;

  if (products) {
    optionalList = products.filter(curProduct => curProduct.collection === 'optional');
  };

  return (
    <Fragment>
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

          {/* note that this shows only on tab -to- mobile viewpoint */}
          <ul className={classes["cart-tab-list"]}>
            {cartItems.map((curItem) => (
              <CartPageItemTab
                key={curItem.id}
                id={curItem.id}
                img={curItem.img}
                itemTotalPrice={curItem.itemTotalPrice}
                price={curItem.price}
                quantity={curItem.quantity}
                description={curItem.description}
              />
            ))}
          </ul>

          <div className={classes["coupon-box"]}>
            <input type="text" placeholder="Coupon code" />
            <button>Apply Coupon</button>
          </div>
        </div>

        <CartPageTotals />
      </section>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {error && (
        <div className="centered">
          <p>{error}</p>
        </div>
      )}
      {status === "completed" && !error && (
        <ProductList products={optionalList} isCollection={"optional"} />
      )}
    </Fragment>
  );

};

export default CartPage;  