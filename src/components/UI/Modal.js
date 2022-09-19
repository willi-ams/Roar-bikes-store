import { Fragment } from "react";
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Fragment>
            {props.content === 'menu' && <div className={classes['menu-modal']}>{props.children}</div>}
            {props.content === 'cart' && <div className={classes['cart-modal']}>{props.children}</div>}
        </Fragment>
    )
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay content={props.content}>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )

};

export default Modal;