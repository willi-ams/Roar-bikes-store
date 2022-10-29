import WishListItem from './WishListItem';

import classes from './WishList.module.css';

const WishList = (props) => {

    return (
        <section className={classes["section-items"]}>
            <div className={classes["item__head-text"]}>
                <h2>Your Product WishList</h2>
            </div>

            <div className={classes["items-grid"]}>
                {props.items.map((item) => (
                    <WishListItem
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default WishList;