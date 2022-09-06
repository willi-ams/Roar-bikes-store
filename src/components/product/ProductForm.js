import { useRef, useEffect, useState } from "react";
import classes from './ProductForm.module.css';

import { useSelector } from "react-redux";
import ProductItemSpinner from "../UI/ProductItemSpinner";



const ProductForm = (props) => {
    const [isLoading, setIsloading] = useState(false);
    const amountInputRef = useRef();

    const notification = useSelector((state) => state.cartModal.notification);

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (isLoading) return;  // if we are already loading return
        setIsloading(true);  


        const enteredAmount = Number(amountInputRef.current.value);

        if (enteredAmount) props.onAddToCart(enteredAmount);
    };

    useEffect(() => {

        if (notification) {  // notification is falsy by (default) in the redux store
            setIsloading(false);
        };

    }, [notification]);

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="number" min='1' max='4' defaultValue='1' ref={amountInputRef} />
            <button>
                {isLoading && <span className={classes['spinner']}><ProductItemSpinner /></span>}
                {!isLoading && <span className={classes['text']}>Add To Cart</span>}
            </button>
        </form>
    )
}

export default ProductForm;