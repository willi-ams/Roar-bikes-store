import { useRef } from "react";

import classes from './ProductForm.module.css';


const ProductForm = (props) => {
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = Number(amountInputRef.current.value);

        if (enteredAmount) props.onAddToCart(enteredAmount);
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="number" min='1' max='4' defaultValue='1' ref={amountInputRef} />
            <button>Add To Cart</button>
        </form>
    )
}

export default ProductForm;