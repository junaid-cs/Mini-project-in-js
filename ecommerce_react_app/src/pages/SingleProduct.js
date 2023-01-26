import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import './Singleproduct.css'
const SingleProduct = () => {
const [product,setProduct]=useState({});
var param=useParams();
useEffect(()=>{
    let id =param.id;
    fetch(`/Data/data.json`)
      .then(res => res.json())
      .then(product => setProduct(product[`${id - 1}`]));
},[])

   
  return (
    <div className='container mt-4'>
        <div className="card d-flex row flex-row p-0 p-md-2 mb-3 mb-md-0 col-10 col-sm-8 col-md-12 col-lg-10 mx-auto bg-light rounded-2" >
                <img src={product.img}  className=" col-12 col-md-5  p-0 py-md-2   w-md-50 w-sm-100 rounded img-fluid" alt="pizza" srcSet="" />
                <div className="card-body p-1 ms-4 mt-3 col-10 col-md-6">
                    <h5 className="card-title  fw-bold">{product.title}</h5>
                    <p className="card-text fs-13 p-0 m-0 mt-3 fs-bold font-sans h-220 overflow-hidden ">{product.description}</p>
                    <hr className='my-1'/>
                    <h6 className=" rounded text-black fw-bolder">Rs.{product.price}</h6>
                    <h5 className='btn btn-red rounded-3 w-75 mx-4 mx-md-0 w-md-50 '>Add to Cart</h5>
                </div>
            </div>
    </div>
  )
}

export default SingleProduct