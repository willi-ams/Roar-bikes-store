import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../components/layout/Hero";
import ProductList from "../components/product/ProductList";

import { cartModalActions } from "../store/cart-modal-slice";

import ProductData from "../components/delete/ProductData";


const Home = () => {
    const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.collection === 'recent');

    const dispatch = useDispatch();

    useEffect(() => {  // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]); 

    return (
        <Fragment>
            <Hero />
            <ProductList products={DUMMY_ITEMS} isCollection={'collection'} />
        </Fragment>
    );
};

export default Home;