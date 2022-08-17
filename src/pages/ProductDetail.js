import { useParams } from "react-router-dom";
import ProductView from "../components/product/ProductView";
import Notfound from "./NotFound";

import ProductData from "../components/delete/ProductData";


const ProductDetail = () => {
    const params = useParams();

    const product = ProductData.find(curProduct => curProduct.id === params.productId);
    console.log(params.productId);
    console.log(product);

    if (!product) { // if product is undefined
        return <Notfound />
    }

    return (
        <section>
            <ProductView product={product} />
        </section>
    )
}

export default ProductDetail;