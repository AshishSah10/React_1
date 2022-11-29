import React from "react";
//import ProductCard from "../ProductCard/ProductCard";

import ProductCard from "../ProductCard";

const products = [
    {
        title: "IPhone 14 pro",
        price: "Rs 1,00,000"
    },
    {
        title: "Oppo 2",
        price: "Rs 20,000"
    },
    {
        title: "Vivo 3",
        price: "Rs 30,000"
    },
    {
        title: "Redmi 10 Prime",
        price: "Rs 10,000"
    },
]
function ProductList(){
    return (
        <>
        <div>Product List</div>
        {
            products.map(
                product => (<ProductCard title = {product.title} price = {product.price}/>),
                {/* product => <ProductCard {...product}/> */}
            )
        }
        </>
    )
}

export default ProductList;