import ProductList from "../components/product/ProductList";

import ProductData from "../components/delete/ProductData";


const FoldingBikes = () => {
    const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.type === 'fb');

    return (
        <ProductList products={DUMMY_ITEMS} isCollection={false} text={'Folding Bikes'} />
    ) 
};

export default FoldingBikes;