import React from 'react'

const Product = (props) => {
    const {product}=props;
  return (
    <div className='col-2 mx-3 my-2'>
          <div className="card border-0" >
            <img src={product.img} className="mx-auto" style={{width:150,height:150}} alt="" srcset="" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="text-center rounded">{product.price}</h6>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
  )
}

export default Product