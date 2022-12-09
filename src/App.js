
import { useContext, useState } from 'react';
// import Cart from './components/Cart';
// import ProductList from './components/ProductList/ProductList';
import Cart2 from './components/Cart/Cart2';
import ProductList2 from './components/ProductList/ProductList2';
import CountDown from './components/CountDown/CountDown';
import CartContext from './contexts/CartContext';

/**
 * cart -> object
 * <product-id>: {
 *    productId: Number,
 *    title: String,
 *    price: Number,
 *    quantity: Number
 * } 
 */
function App() {
  const [cart, setCart ] = useState({});

 // addToCart() and removeFromCart() functionlity should be accessible by Cart button
  function addToCart(product){
    // react will take cart as changed if its reference object is changed
    const newCart = {...cart};
    if(!newCart[product.id]){
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      }
    }

    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function removeFromCart(product){
    const newCart = {...cart};
    if(newCart[product.id]){
      newCart[product.id].quantity -= 1;
      if(newCart[product.id].quantity == 0){
        delete newCart[product.id];
      }
      setCart(newCart);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <CountDown startFrom = {2}/>
        {/* <Cart cart = {cart}/>
        <ProductList 
          addToCart={addToCart}
          removeFromCart = {removeFromCart}
          cart = {cart}
        /> */}
        <CartContext.Provider value = {{cart, addToCart, removeFromCart}}>
          <Cart2 />
          <ProductList2 />
        </CartContext.Provider>
      </header>
    </div>
  );
}

export default App;
