import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import ProductCard from "../ProductCard";
import styles from "./Cart.module.css";

function Cart2(){
    const {cart} = useContext(CartContext);
    const cartList = Object.values(cart);
    console.log("cartList: ",cartList)

    if(cartList.length === 0){
        return(
            <div className={styles.cart}>
                <h3>Noting in the cart</h3>
            </div>
        )
    }
    else{
        return(
            <ol className={styles.cart}>
                {cartList.map(cartItem => {
                            console.log("cartItem",cartItem);
                            <>
                            <h2>New Item</h2>
                            <li key={cartItem.id}>
                                <h3>{cartItem.title}</h3>
                                <span>{cartItem.price}</span>
                                <span>Quantity: {cartItem.quantity}</span>
                            </li>
                            </>
                        })}
            </ol>
        )
    }
    
}

export default Cart2;