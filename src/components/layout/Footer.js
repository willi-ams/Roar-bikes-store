import { Link } from "react-router-dom";
import classes from './Footer.module.css';

const Footer = () => {

    return (
        <div className={classes['footer__main']}>
            <div className={classes['footer-box']}>
                <h1>Roar Bikes</h1>
                <p className={classes['footer-text']}>Designed and Developed by Williams</p>
            </div>

            <div className={classes['footer-box']}>
                <h3>Find It Fast</h3>
                
                <ul className="footer-list">
                    <li><Link to='/my-account/orders'>Order</Link></li>
                    <li><Link to='/my-account/orders/downloads'>Download</Link></li>
                    <li><Link to='/my-account/edit-account'>Account</Link></li>
                    <li><Link to='/my-account/lost-pasword'>Password</Link></li>
                </ul>
            </div>

            <div className={classes['footer-box']}>
                <h3>Information</h3>

                <ul className="footer-list">
                    <li><Link to='/my-account/orders'>My Account</Link></li>
                    <li><Link to='/my-account/orders/downloads'>Track Your Order</Link></li>
                    <li><Link to='/my-account/edit-account'>Returns/Exchange</Link></li>
                    <li><Link to='/my-account/lost-pasword'>Product Support</Link></li>
                </ul>
            </div>

            <div className={classes['footer-box']}>
                <h3>Customer Care</h3>

                <ul className="footer-list">
                    <li><Link to='/my-account/orders'>Private Policy</Link></li>
                    <li><Link to='/my-account/orders/downloads'>About</Link></li>
                    <li><Link to='/my-account/edit-account'>Contact</Link></li>
                    <li><Link to='/my-account/lost-pasword'>Compare</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;