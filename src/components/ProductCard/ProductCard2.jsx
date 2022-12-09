import React from "react";
import AddToCart from "../AddToCart";
import { AddToCart2 } from "../AddToCart/AddToCart2";
import styles from "./ProductCard.module.css";

export function ProductCard2({product}){
    return(
        <div className={styles.card}>
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
            <AddToCart2
                product = {product}
            />
        </div>
    )
}

//export default ProductCard2;