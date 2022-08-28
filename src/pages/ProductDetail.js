import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { cartModalActions } from "../store/cart-modal-slice";
import ProductView from "../components/product/ProductView";
import Notfound from "./NotFound";
import ProductList from "../components/product/ProductList";

import ProductData from "../components/delete/ProductData";


const ProductDetail = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {  // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
        dispatch(cartModalActions.setDisplayTrue());
    }, [dispatch]);

    const product = ProductData.find(curProduct => curProduct.id === params.productId);
    const optionalList = ProductData.filter(curItem => curItem.collection === 'optional');
    // console.log(params.productId);
    // console.log(product);

    if (!product) { // if product is undefined
        return <Notfound />
    };

    return (
        <section>
            <ProductView product={product} />
            <ProductList products={optionalList} isCollection={'optional'} />
        </section>
    );
};

export default ProductDetail;