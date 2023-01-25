import React, { useEffect, useState } from 'react';
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./Data/data.json')
      .then(res => res.json())
      .then(product => setProducts(product));
  }, [])
  return (
    <div className='container product-list'>
      <div className='row'>
        {
          products.map((product) => { return (<Product key={product.id} product={product} />) })
        }
      </div>
    </div>
  )
}

export default Products