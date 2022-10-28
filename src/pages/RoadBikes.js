import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartModalActions } from "../store/cart-modal-slice";
import ProductList from "../components/product/ProductList";
import useHttp from "../hooks/use-http";
import { getAllProducts } from '../lib/api';
import LoadingSpinner from '../components/layout/LoadingSpinner';


const RoadBikes = () => {
  const dispatch = useDispatch();
  const { sendRequest, status, data: products, error } = useHttp(getAllProducts, true); 

  useEffect(() => {  // NOTE: this useEffect concept is to only show the cart modal when we are not in d cart page. otherwise, it wont show.
    dispatch(cartModalActions.setDisplayTrue());
  }, [dispatch]);
  
  useEffect(() => {  // effect for sending the request to the database
    sendRequest();
  }, [sendRequest]);

  // console.log(products);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  };

  if (error) {
    return <div className="centered">
      <p>{error}</p>
    </div>
  };

  const roadBikesItems = products.filter(curProduct => curProduct.type === 'rb');

  return (
    <ProductList
      products={roadBikesItems}
      isCollection={'page'}
      text={'Road Bikes'}
    />
  );
};

export default RoadBikes;



