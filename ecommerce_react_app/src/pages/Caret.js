import { useContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import { CartContext } from '../CartContext'
import Product from '../components/Product';
import data from '../Data/data.json'
import './caret.css'

const Caret = () => {
  const [items, setitems] = useState([]);
  const { cart } = useContext(CartContext);
  // console.log(items)
  useEffect(() => {

    let a = cart.items;
    if (!a) {
      return
    }
    // console.log(a);
    let b = [];
    for (const property in a) {
      // console.log(`${property}: ${a[property]}`);
      // console.log(data[property].id ,property);
      if (data[property].id - 1 == property) {
        // console.log(data[property -1]); 
        let a = [data[property - 1]];
        b.push(...a);
        // console.log(b);
        // console.log(JSON.parse(b));
        setitems(b)

      }
    }
    // console.log(a)
  }, [cart]);
  //  let a = (items)
  // let a = JSON.parse(items)
  // items.map(item => { console.log(item.)})
  console.log(items);
  const getQyt = (productid) => {
    return cart.items[productid];
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 bg-light rounded mx-auto p-4 my-3">
          {
            items.map(item => {
              return (
                <div className="col-12   my-3  mx-auto d-flex justify-content-between align-items-center">
                  <div className='d-flex align-items-center  col-5'>
                    <img src={item.img} style={{ width: 50 }} alt="" />
                    <div className='fw-bold ps-2 fs-13'>{item.title}</div>
                  </div>
                  <div className='d-flex align-items-center col-3'>
                    <div className="btn btn-red px-3 py-0 pb-1">-</div>
                    <div className="px-2 fs-13">{getQyt(item.id)}</div>
                    <div className="btn btn-red px-3 py-0 pb-1">+</div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between col-3'>
                    <div className="rate fs-13 me-3 "><b>Rs:</b> {item.price}</div>
                    <button className='btn btn-red py-1 fs-13 fw-normal'>Delete</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <hr className='w-100 w-lg-75 mx-auto' />
      <div className="text-center w-50 ms-auto">
        <div className="grand-total  fs-13">
          <b>Grand total : </b>Rs 500
        </div>
        <div className="btn btn-red fs-13 fw-normal py-2 mt-2">Order Now</div>
      </div>
    </div>
  )
}

export default Caret