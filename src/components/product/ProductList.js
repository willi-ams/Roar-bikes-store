import ProductItem from './ProductItem';

import classes from './ProductList.module.css';


const ProductList = (props) => {

    return (
      <section className={classes["items-grid"]}>
        {props.products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </section>
    );
}

export default ProductList;