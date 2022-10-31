import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartModalActions } from "../store/cart-modal-slice";


const Notfound = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartModalActions.setDisplayFalse());
    }, [dispatch]);

    return (
        <></>
    );
}

export default Notfound;