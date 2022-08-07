import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { commerce } from './utils/commerce';

export default function App() {

  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleUpdateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>  
      <Router>
      <Header cartlength={cart.total_items}/>
        <Routes>
          <Route path='/' element={<Home products={products} addToCart={handleAddToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
        </Routes>
      </Router>
    </>
  )
}
