import React from 'react'
import { Link } from 'react-router-dom';
import   './product.css'

const Product = (props) => {
  const  addToCart = (e,product)=>{
        console.log(product);
        e.preventDefault();
    }
    const { product } = props;
    return (
        <div className='col-10 col-sm-6 col-md-4 col-lg-3 mx-auto mx-lg-0   my-2'>
            <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'black'}}>
            <div className="card card-hover d-flex p-2 bg-light" >
                <img src={product.img} className="mx-auto rounded img-fluid" alt="pizza" srcSet="" />
                <div className="card-body p-1 text-center">
                    <h5 className="card-title text-center fw-bold">{product.title}</h5>
                    <p className="card-text fs-13 p-0 m-0 fs-bold font-sans h-37 overflow-hidden">{product.description}</p>
                    <hr className='my-1'/>
                    <h6 className="text-center rounded text-red fw-bolder">Rs.{product.price}</h6>
                    <button onClick={(e)=>{addToCart(e,product)}} className='btn btn-red fs-13'>Add to Cart</button>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default Product