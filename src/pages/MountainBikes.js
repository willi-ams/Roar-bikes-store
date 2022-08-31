import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../components/product/ProductList";
import { cartModalActions } from "../store/cart-modal-slice";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/layout/LoadingSpinner";

import { getAllProducts } from "../lib/api";



const MountainBikes = () => {
    const { sendRequest, status, data: products, error } = useHttp(getAllProducts, true);
    const dispatch = useDispatch();
    
    useEffect(() => {  // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]);

    useEffect(() => {   // effect for sending the request to the database
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    };

    if (error) {
        return <div className="centered">
            <p>{error}</p>
        </div>
    }
    
    const mountainBikesItems = products.filter(curProduct => curProduct.type === 'mb');

    return (
        <ProductList
            products={mountainBikesItems}
            isCollection={'page'}
            text={'Mountain Bikes'}
        />
    );
};

export default MountainBikes;