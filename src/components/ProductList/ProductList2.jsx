import React, { memo, useEffect, useState, version } from "react";
//import ProductCard from "../ProductCard/ProductCard";

import ProductCard from "../ProductCard";
import { ProductCard2 } from "../ProductCard/ProductCard2";

const _products = [
    {
        id : 1,
        title: "IPhone 14 pro",
        price: "Rs 1,00,000"
    },
    {
        id : 2,
        title: "Oppo 2",
        price: "Rs 20,000"
    },
    {
        id : 3,
        title: "Vivo 3",
        price: "Rs 30,000"
    },
    {
        id : 4,
        title: "Redmi 10 Prime",
        price: "Rs 10,000"
    },
]

function getProducts(callback){
    console.log("api called")
    setTimeout(() => callback(_products), 3000);
}

function ProductList2(){
    const [isError, setError] = useState(null);

    let isLoadingState = useState(true);
    // [isLoading, setLoading() ]
    // const [isLoading, setLoading] = useState(true);
    let isLoading = isLoadingState[0];
    let setIsLoading = isLoadingState[1];
    
    let productState = useState([]);
    let products = productState[0];
    let setProducts = productState[1];

    
    console.log("Api call started ", isLoading, products);
    // getProducts(function(results){
    //     // isLoading = false;
    //     // products = results;
    //     setIsLoading(false);
    //     setProducts(results);
    //     console.log("Api call ended ", isLoading, products);
    // });

    // mounting phase
    // useEffect(() => {
    //     getProducts(function(results){
    //         // isLoading = false;
    //         // products = results;
    //         setIsLoading(false);
    //         setProducts(results);
    //         console.log("Api call ended ", isLoading, products);
    //     });
    // }, []);

    // mounting phase
    // useEffect(() => {
    //     const promise = fetch("http://localhost:3001/products");
    //     promise.then((response) => {
    //         console.log("fetching successful ", response);
    //         const promise1 = response.json()
    //         promise1.then((result) => {
    //             console.log("parsing json successful ",result);
    //         });
    //         promise1.catch((error) => {
    //             console.log("error parsing json ", error);
    //         })
    //     });
    //     promise.catch((error) => {
    //         console.log("fetching failed ", error);
    //     })
    // }, []);

    // mounting phase
    // useEffect(() => {
    //     fetch("http://localhost:3001/products")
    //         .then((response) => {
    //             console.log("fetching successful ", response);
    //             return response.json();
    //         })
    //         .then((result) => {
    //             console.log("parsing json successful ", result);
    //             setIsLoading(false);
    //             setProducts(result);
    //         })
    //         .catch(error => {
    //             console.log("error in fetch/parse ", error);
    //             setError(error);
    //         })
    // }, []);

    // mounting phase(using asyn-await)
    useEffect(() => {
        
        async function asyncLoadingProducts(){
            try{
                const response = await fetch("http://localhost:3001/products");
                const jsonResponse = await response.json();
                setIsLoading(false);
                setProducts(jsonResponse);
            }
            catch(error){
                console.log(error);
                setError(error);
            } 
        }
        asyncLoadingProducts();
    }, []);

    if(isError){
        return <h5>Somthing is Wrong!!</h5>;
    }
    else if(isLoading){
        return <h3>Loading...</h3>;
    }
    else{
        return (
            <>
                <div>Product List</div>
                {
                    products.map(
                        product => (
                            <ProductCard2
                             key={product.id}
                             product = {product}
                            />),
                        {/* product => <ProductCard {...product}/> */}
                    )
                }
            </>
        )
    }
}

export default memo(ProductList2);