import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../components/product/ProductList";
import { cartModalActions } from "../store/cart-modal-slice";

import ProductData from "../components/delete/ProductData";


const FoldingBikes = () => {
    const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.type === 'fb');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]);

    return (
        <ProductList products={DUMMY_ITEMS} isCollection={'page'} text={'Folding Bikes'} />
    )
};

export default FoldingBikes;