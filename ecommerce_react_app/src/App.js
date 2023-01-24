import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home'
import Products from './pages/Products'
import Caret from './pages/Caret'
const App = () => (
    <>
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/caret" element={<Caret />} />
      </Routes>
  </Router>
    </>
)

export default App