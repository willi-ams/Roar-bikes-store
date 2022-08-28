import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../components/product/ProductList";
import { cartModalActions } from "../store/cart-modal-slice";

import ProductData from "../components/delete/ProductData";


const MountainBikes = () => {
    const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.type === 'mb');

    const dispatch = useDispatch();

    useEffect(() => {  // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]);

    return (
        <ProductList
            products={DUMMY_ITEMS}
            isCollection={'page'}
            text={'Mountain Bikes'}
        />
    );
};

export default MountainBikes;