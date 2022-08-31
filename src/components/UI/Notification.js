import classes from './Notification.module.css';
import icon from '../../assets/sprite.svg';

const Notification = (props) => {

    let cssStyles;

    if (props.status === 'error') { 
        cssStyles = `${classes.notification} ${classes.error}`;
    }

    if (props.status === 'complete') {
        cssStyles = `${classes.notification} ${classes.success}`;
    }

    return (
        <aside className={cssStyles}>
            <div className={classes['cart-detail-box']}>
                <svg className={classes["icon-check"]}>
                    <use xlinkHref={`${icon}#icon-check`} />
                </svg>
                <p>{props.message}</p>
            </div>

            <div className={classes['button-box']}>
                <div className={classes['icon-box']} onClick={props.onClose}>
                    <svg className={classes["iconx"]}>
                        <use xlinkHref={`${icon}#icon-x`} />
                    </svg>
                </div>
            </div>
        </aside>
    );
};

export default Notification;