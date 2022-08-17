import { Fragment } from "react";
import Hero from "../components/layout/Hero";
import ProductList from "../components/product/ProductList";

import ProductData from "../components/delete/ProductData";

const Home = () => {
    const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.collection === 'recent');

    return (
        <Fragment>
            <Hero />
            <ProductList products={DUMMY_ITEMS} isCollection={true} />
        </Fragment>
    );
};

export default Home;