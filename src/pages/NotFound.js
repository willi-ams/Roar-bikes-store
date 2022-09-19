import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartModalActions } from "../store/cart-modal-slice";

import PageNotFound from "../components/UI/PageNotFound";

const Notfound = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartModalActions.setDisplayFalse());
    }, [dispatch]);

    return (
        <PageNotFound />
    )
};

export default Notfound;