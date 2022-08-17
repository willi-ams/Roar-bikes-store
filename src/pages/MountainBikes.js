import ProductList from "../components/product/ProductList";

import ProductData from "../components/delete/ProductData";


const MountainBikes = () => {
    const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.type === 'mb');

    return (
        <ProductList
            products={DUMMY_ITEMS}
            isCollection={false}
            text={'Mountain Bikes'}
        />
  );
};

export default MountainBikes;