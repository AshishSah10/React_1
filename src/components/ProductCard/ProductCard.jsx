import React from "react";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";

function ProductCard({product, addToCart, removeFromCart, quantity}){
    return(
        <div className={styles.card}>
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
            <AddToCart 
                addToCart = {addToCart}
                removeFromCart = {removeFromCart}
                quantity = {quantity}
                product = {product}
            />
        </div>
    )
}

export default ProductCard;