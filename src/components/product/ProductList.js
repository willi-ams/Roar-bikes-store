import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

import classes from './ProductList.module.css';


const ProductList = (props) => {

  return (
    <section className={classes['section-items']}>
      {!props.isCollection && <div className={classes['item-head']}>
          <div className={classes['link-box']}>
            <Link to='/'>Home /</Link>
            <p>{props.text}</p>
          </div>

          {/* filter here */}
      </div>}

      {props.isCollection && <div className={classes['item__head-text']}>
        <h2>Recent Products</h2>
        <p>Browse our most recent bikes and other accessories with the best deals.</p>
      </div>}
      
      <div className={classes["items-grid"]}>
        {props.products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      </section>
  );
}

export default ProductList;