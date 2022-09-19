import useCollapsible from "../../hooks/use-collapsible";
import { NavLink } from "react-router-dom";
import Modal from "../UI/Modal";

import icons from '../../assets/sprite.svg';
import classes from './Menu.module.css';

const Menu = (props) => {
    const { isCollapse: productCollapse, collapseHandler: setProductCollapse } = useCollapsible(false);
    const { isCollapse: infoCollapse, collapseHandler: setInfoCollapse } = useCollapsible(false);
    const { isCollapse: contactCollapse, collapseHandler: setContactCollapse } = useCollapsible(false);

    const btnProductCollapse = `${productCollapse ? classes.active : ''}`;
    const productCollapsibleClass = `${productCollapse ? classes['collapsible--expanded'] : ''}`;

    const btnInfoCollapse = `${infoCollapse ? classes.active : ''}`;
    const InfoCollapsibleClass = `${infoCollapse ? classes['collapsible--expanded'] : ''}`;

    const btnContactCollapse = `${contactCollapse ? classes.active : ''}`;
    const contactCollapsibleClass = `${contactCollapse ? classes['collapsible--expanded'] : ''}`;

    return (
        <Modal onClose={props.onClose} content='menu'>
            <ul className={classes["menu-list"]}>
                <li className={classes["menu-item"]}>
                    <NavLink to='/' className={({ isActive }) => isActive ? classes.active : ''}>Home</NavLink>
                </li>

                <li className={productCollapsibleClass}>
                    <div className={classes["collapsible__header"]}>
                        <h2 className={classes.heading}>Product Categories</h2>
                        <button className={btnProductCollapse} onClick={setProductCollapse}>
                            <svg className={classes['menu-icon']}>
                                <use xlinkHref={`${icons}#icon-chevron-right`} />
                            </svg>
                        </button>
                    </div>
                    <ul className={classes["collapsible__content"]}>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/road-bikes' className={({ isActive }) => isActive ? classes.active : ''}>Road Bikes</NavLink>
                        </li>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/mountain-bikes' className={({ isActive }) => isActive ? classes.active : ''}>Mountain Bikes</NavLink>
                        </li>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/folding-bikes' className={({ isActive }) => isActive ? classes.active : ''}>Folding Bikes</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={InfoCollapsibleClass}>
                    <div className={classes["collapsible__header"]}>
                        <h2 className={classes.heading}>Information</h2>
                        <button className={btnInfoCollapse} onClick={setInfoCollapse}>
                            <svg className={classes['menu-icon']}>
                                <use xlinkHref={`${icons}#icon-chevron-right`} />
                            </svg>
                        </button>
                    </div>
                    <ul className={classes["collapsible__content"]}>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/my-Account' className={({ isActive }) => isActive ? classes.active : ''}>My Account</NavLink>
                        </li>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/track-order' className={({ isActive }) => isActive ? classes.active : ''}>Track Order</NavLink>
                        </li>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/returns' className={({ isActive }) => isActive ? classes.active : ''}>Returns & exchange </NavLink>
                        </li>
                    </ul>
                </li>

                <li className={contactCollapsibleClass}>
                    <div className={classes["collapsible__header"]}>
                        <h2 className={classes.heading}>Customer Care</h2>
                        <button className={btnContactCollapse} onClick={setContactCollapse}>
                            <svg className={classes['menu-icon']}>
                                <use xlinkHref={`${icons}#icon-chevron-right`} />
                            </svg>
                        </button>
                    </div>
                    <ul className={classes["collapsible__content"]}>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/private-policy' className={({ isActive }) => isActive ? classes.active : ''}>Private Policy</NavLink>
                        </li>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/about' className={({ isActive }) => isActive ? classes.active : ''}>About</NavLink>
                        </li>
                        <li className={classes["menu-item"]}>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? classes.active : ''}>Contact</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={classes["menu-item"]}>
                    <NavLink to='/wishlist' className={({ isActive }) => isActive ? classes.active : ''}>Wishlist</NavLink>
                </li>

                <li className={classes["menu-item"]}>
                    <NavLink to='/login' className={({ isActive }) => isActive ? classes.active : ''}>Login / Register</NavLink>
                </li>
            </ul>
        </Modal>
    )

};

export default Menu;