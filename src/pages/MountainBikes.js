import ProductList from "../components/product/ProductList";

const DUMMY_ITEMS = [
    {
        id: 'm1',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image13.png?alt=media&token=242ca1c9-5287-4b77-940a-b6c46b9d17c8',
        description: 'First Road Bike Item',
        price: 300
    },
    {
        id: 'm2',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image14.png?alt=media&token=b2dd90ff-4552-447b-96d8-279125a40da5',
        description: 'Second Road Bike Item',
        price: 250
    },
    {
        id: 'm3',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image15.png?alt=media&token=c43504f7-1486-4f6b-bff0-6b3d03fc61a9',
        description: 'Third Road Bike Item',
        price: 300
    },
    {
        id: 'm4',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image16.png?alt=media&token=e22262a4-ccf5-4e9b-85a5-f1ec2677be88',
        description: 'Fourth Road Bike Item',
        price: 200
    },
    {
        id: 'm5',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image17.png?alt=media&token=00b0f5db-29d0-4168-b080-a749f2df954d',
        description: 'Fourth Road Bike Item',
        price: 200
    },
    {
        id: 'm6',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image12.png?alt=media&token=425d510e-5d59-45c9-8a1e-eb3815b77990',
        description: 'Fourth Road Bike Item',
        price: 200
    },
    {
        id: 'm7',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image11.png?alt=media&token=9585d184-ef5a-4be5-83c4-f37b0f91a27d',
        description: 'Fourth Road Bike Item',
        price: 200
    },
    {
        id: 'm8',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image19.png?alt=media&token=5bec9cf7-a18e-4bdb-a34c-af00f4408151',
        description: 'Fourth Road Bike Item',
        price: 200
    }
]

const MountainBikes = () => {

    return (
        <ProductList products={DUMMY_ITEMS} />
    )
};

export default MountainBikes;