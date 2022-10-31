import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartModalActions } from "../store/cart-modal-slice";


const Notfound = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartModalActions.setDisplayFalse());
    }, [dispatch]);

    return (
        <section className="notfound">
            <h1>Page not found</h1>
        </section>
    );
}

export default Notfound;