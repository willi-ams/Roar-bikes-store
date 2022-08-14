import ProductList from "../components/product/ProductList";

const DUMMY_ITEMS = [
    {
        id: 'm1',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image24.png?alt=media&token=29c51b8c-46ba-47ca-bf58-5b6b4f6f3718',
        description: 'First Road Bike Item',
        price: 300
    },
    {
        id: 'm2',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image32.png?alt=media&token=1c3b1487-7bca-476f-af28-0d4117e54822',
        description: 'Second Road Bike Item',
        price: 250
    },
    {
        id: 'm3',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image28.png?alt=media&token=c4fb21eb-1b8f-4a97-b662-eeaddffbc8fc',
        description: 'Third Road Bike Item',
        price: 300
    },
    {
        id: 'm4',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image26.png?alt=media&token=dd79465c-be28-478f-8d90-096ead04fa61',
        description: 'Fourth Road Bike Item',
        price: 200
    },
    {
        id: 'm5',
        image: 'https://firebasestorage.googleapis.com/v0/b/roarbikes-store.appspot.com/o/image25.png?alt=media&token=a603fbe4-6679-414f-8a52-26a9cfbef4b7',
        description: 'Fourth Road Bike Item',
        price: 200
    }
]

const FoldingBikes = () => {
    return (
        <ProductList products={DUMMY_ITEMS} />
    ) 
};

export default FoldingBikes;