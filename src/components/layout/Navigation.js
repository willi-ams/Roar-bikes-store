import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
import icons from "../../assets/sprite.svg";

const Navigation = () => { 

    return (
        <nav className={styles.nav}>
            <h1>Roar Bikes</h1>

            <ul>
                <li><NavLink to='/' className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></li>
                <li><NavLink to='/road-bikes' className={({isActive}) => isActive ? styles.active : ''}>Road bikes</NavLink></li>
                <li><NavLink to='/mountain-bikes' className={({isActive}) => isActive ? styles.active : ''} >Mountain bikes</NavLink></li>
                <li><NavLink to='/folding-bikes' className={({isActive}) => isActive ? styles.active : ''}>Folding bikes</NavLink></li>
                <li><NavLink to='/contact' className={({isActive}) => isActive ? styles.active : ''}>Contact</NavLink></li>
            </ul>

            <div className={styles['user-icons-box']}>
                <button className={styles['user-btn']}>
                    <svg className={styles['nav-icon']}>
                        <use xlinkHref={`${icons}#icon-user`} />
                    </svg>
                </button>
                
                <button className={styles['user-btn']}>
                    <svg className={styles['nav-icon']}>
                        <use xlinkHref={`${icons}#icon-heart`} />
                    </svg>
                    <span className={styles['nav-icon__notification']}>0</span>
                </button>

                <button className={styles['user-btn']}>
                    <svg className={styles['nav-icon']}>
                        <use xlinkHref={`${icons}#icon-shopping-cart`} />
                    </svg>
                    <span className={styles['nav-icon__notification']}>0</span>
                </button>
            </div>
        </nav>
    );
}

export default Navigation;