import { Fragment } from 'react';
import classes from './ProductItemSpinner.module.css';

const ProductItemSpinner = (props) => {

    return (
        <Fragment>
            <div className={props.type === 'cart' ? classes['spinner'] : classes['spinner-dark'] }></div>
        </Fragment>
    )
};

export default ProductItemSpinner;