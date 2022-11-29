import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getAllProducts } from '../lib/api';
import LoadingSpinner from '../components/layout/LoadingSpinner';

import { cartModalActions } from '../store/cart-modal-slice';
import ProductView from '../components/product/ProductView';
import Notfound from './NotFound';
import ProductList from '../components/product/ProductList';

const ProductDetail = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const { sendRequest, status, data: products, error } = useHttp(getAllProducts, true);

    useEffect(() => {
        // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]);

    useEffect(() => {
        // effect for sending the request to the database
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="centered">
                <p>{error}</p>
            </div>
        );
    }

    const product = products.find((curProduct) => curProduct.id === params.productId);
    const optionalList = products.filter((curItem) => curItem.collection === 'optional');
    // console.log(params.productId);
    // console.log(product);

    if (!product) {
        // if product is undefined
        return <Notfound />;
    }

    return (
        <section>
            <ProductView product={product} />
            <ProductList products={optionalList} isCollection={'optional'} />
        </section>
    );
};

export default ProductDetail;
