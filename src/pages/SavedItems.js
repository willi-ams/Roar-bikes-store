import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartModalActions } from "../store/cart-modal-slice";

import WishlistPageEmpty from "../components/wishlist/WishlistPageEmpty";
import WishList from "../components/wishlist/WishList";


const SavedItems = () => {
  const dispatch = useDispatch();
  const wishListData = useSelector((state) => state.wishList.items);

  useEffect(() => {
    // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
    dispatch(cartModalActions.setDisplayTrue());
  }, [dispatch]);

  if(wishListData.length === 0) {
    return (
      <WishlistPageEmpty />
    );
  };

  return (
    <WishList items={wishListData} />
  );
};

export default SavedItems;


