import { useState } from "react";

function AddToCart({product, addToCart= () => {}, removeFromCart = () => {}, quantity}){
    //const [quantity, setQuantity] = useState(quantity);

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

export default AddToCart;