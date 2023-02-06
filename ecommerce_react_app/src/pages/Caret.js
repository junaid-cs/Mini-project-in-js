import { useContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import { CartContext } from '../CartContext'
import Product from '../components/Product';
import data from '../Data/data.json'
import './caret.css'

const Caret = () => {
  let total = 0;
  const [items, setitems] = useState([]);
  const { cart, setcart } = useContext(CartContext);
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
  const increment= productid=>{
    const excistantQyt = cart.items[productid];
    if(excistantQyt === 5 ){
      return
    }
    const _cart = {...cart};
    _cart.items[productid] = excistantQyt + 1;
    _cart.totalitems += 1;
    setcart(_cart);

  }
  const decrement= productid=>{
    const excistantQyt = cart.items[productid];
    if(excistantQyt === 1 ){
      return
    }
    const _cart = {...cart};
    _cart.items[productid] = excistantQyt - 1;
    _cart.totalitems -= 1;
    setcart(_cart);

  }
  const getQyt = (productid) => {
    return cart.items[productid];
  }
  const getSum =(productid,price) =>{
    const sum = price * getQyt(productid);
    total +=sum;
    return sum;
  }

  return (
      items.length ? 
    <div className='container'>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 bg-light rounded mx-auto p-4 my-3">
          {
            items.map(item => {
              return (
                <div key={item.id} className="col-12   my-3  mx-auto d-flex  flex-sm-row justify-content-between align-items-center">
                  <div className='d-flex align-items-center my-3 my-sm-0 col-3 col-sm-5'>
                    <img src={item.img} style={{ width: 50 }} alt="" />
                    <div className='fw-bold ps-2 fs-13'>{item.title}</div>
                  </div>
                  <div className='d-flex align-items-center my-3 my-sm-0 col-3 col-sm-3'>
                    <div onClick={()=>{ decrement(item.id) }} className="btn btn-red px-3 py-0 pb-1">-</div>
                    <div className="px-2  fs-13">{getQyt(item.id)}</div>
                    <div onClick={()=>{ increment(item.id) }} className="btn btn-red px-3 py-0 pb-1">+</div>
                  </div>
                  <div className='d-flex align-items-center justify-content-around  col-4 col-sm-3'>
                    <div className="rate fs-13 me-sm-2 me-md-3 "><b>Rs:</b> {getSum(item.id,item.price)}</div>
                    {/* <button className='btn btn-red py-1 fs-13 fw-normal'>Delete</button> */}
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
          <b>Grand total : </b>Rs {total}
        </div>
        <div className="btn btn-red fs-13 fw-normal py-2 mt-2">Order Now</div>
      </div>
    </div>
    : 
    <div className='container text-center w-sm-25 w-md-75'>
      <img src="/images/empty-cart.png" className='img-fluid' alt="img" srcSet="" />
    </div>
  )
}

export default Caret