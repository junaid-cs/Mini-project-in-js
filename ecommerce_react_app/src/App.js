import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Caret from './pages/Caret';
import { CartContext } from './CartContext';
const App = () =>{ 
const [cart,setcart]= useState({});
useEffect(()=>{
  const cart = window.localStorage.getItem('cart')
})
useEffect(()=>{
   window.localStorage.setItem('cart',JSON.stringify(cart));
},[cart])
return (
  <>
    <Router>
      <CartContext.Provider value={{cart,setcart}}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/caret" element={<Caret />} />
        </Routes>
      </CartContext.Provider>
    </Router>
  </>
)}

export default App