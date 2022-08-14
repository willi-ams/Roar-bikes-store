import ProductList from "../components/product/ProductList";

const DUMMY_ITEMS = [
    {
        id: 'm1',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image1.png?alt=media&token=918fd2d5-e9c5-489f-83ea-0999e349002b',
        description: 'First Road Bike Item',
        price: 300
    },
    {
        id: 'm2',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image2.png?alt=media&token=20ae6e41-0028-4340-9d48-6d88664c6817',
        description: 'Second Road Bike Item',
        price: 250
    },
    {
        id: 'm3',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image6.png?alt=media&token=c6448c54-e88c-479e-88c0-6e3d9e75a292',
        description: 'Third Road Bike Item',
        price: 300
    },
    {
        id: 'm4',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image9.png?alt=media&token=57a7138b-cac5-4ba7-a2a5-4926913b780b',
        description: 'Fourth Road Bike Item',
        price: 200
    }
]

const RoadBikes = () => {
    return(
        <ProductList products={DUMMY_ITEMS} />
    )
};

export default RoadBikes;