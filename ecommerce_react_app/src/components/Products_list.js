import React, { useEffect, useState,useContext } from 'react';
import Product from './Product';
import {CartContext} from '../CartContext';

const Products = () => {
//  const { name }=  useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./Data/data.json')
      .then(res => res.json())
      .then(product => setProducts(product));
  }, [])
  return (
    <div className='container product-list'>
      {/* <h1>{name}</h1> */}
      <div className='row'>
        {
          products.map((product) => { return (<Product key={product.id} product={product} />) })
        }
      </div>
    </div>
  )
}

export default Products