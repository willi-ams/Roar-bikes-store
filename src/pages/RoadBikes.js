import ProductList from "../components/product/ProductList";

import ProductData from '../components/delete/ProductData';


const RoadBikes = () => {
  const DUMMY_ITEMS = ProductData.filter(curProduct => curProduct.type === 'rb');

  return (
    <ProductList
      products={DUMMY_ITEMS}
      isCollection={'page'}
      text={'Road Bikes'}
    />
  );
};

export default RoadBikes;