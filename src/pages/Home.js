import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import useHttp from "../hooks/use-http";
import Hero from "../components/layout/Hero";
import ProductList from "../components/product/ProductList";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import { getAllProducts } from "../lib/api";

import { cartModalActions } from "../store/cart-modal-slice";

const Home = () => {
    const { sendRequest, status, data: products, error } = useHttp(getAllProducts, true);
    const dispatch = useDispatch();

    useEffect(() => {  // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]);
    
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    let recentItems;

    if (products) {  // we only filter when the products are readily fetched
        recentItems = products.filter(curProduct => curProduct.collection === 'recent');
    };

    return (
        <Fragment>
            <Hero />
            {status === 'pending' && <div className="centered"><LoadingSpinner /></div>}
            {error && <div className="centered"><p>{error}</p></div>}
            {status === 'completed' && !error && <ProductList products={recentItems} isCollection={'collection'} />}
        </Fragment>
    );
};

export default Home;