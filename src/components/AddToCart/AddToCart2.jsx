import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";

export function AddToCart2({product}){
    //const [quantity, setQuantity] = useState(quantity);
    const {cart, addToCart, removeFromCart} = useContext(CartContext);
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;

    function increment(){
        //setQuantity(quantity + 1);
        addToCart(product);
    }
    function decrement(){
        //setQuantity(quantity - 1);
        removeFromCart(product);
    }

    if(quantity === 0){
        return (
            <button onClick={increment}>Add To Cart</button>
        );
    }
    else{
        return(
            <>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </>
        )
    }
    
}

//export default AddToCart2;