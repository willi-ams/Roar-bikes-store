// import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartModalActions } from "../store/cart-modal-slice";
import CartPage from "../components/cart/CartPage";


const CartLink = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartModalActions.setDisplayFalse());
  }, [dispatch]);

  return (
    <CartPage />
  );
};

export default CartLink;