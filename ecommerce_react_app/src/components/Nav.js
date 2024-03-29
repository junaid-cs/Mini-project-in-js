import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../CartContext';
import './Nav.css';
const Nav = () => {
  const {cart} = useContext(CartContext);
  // console.log(cart.totalitems)
  return  (
    <>
    <nav className='container d-flex justify-content-between baba'>
    
    <Link className='xyz' to='/'> <img style={{height: 45}} src='/images/logo.png' alt='Logo'></img> </Link>
    <ul className='d-flex'>
      <li className='p-2 nav_link'>
    <Link to='/'>Home</Link>
      </li>
      <li className='p-2 nav_link'>
    <Link to='/products'>Products</Link>
      </li>
      <li className='p-2 nav_link'>
    <Link to='/caret' style={{backgroundColor:'rgb(255, 203, 4)'} } className="px-2 py-1 rounded-4 hover-black">
      <span className='mx-1 fw-bold' style={{fontSize:14}}>{cart.totalitems ? cart.totalitems : 0}</span>
      <img src="/images/cart.png" className='' style={{width:25}} alt="" srcSet="" />
    </Link>
      </li>

    </ul>
    </nav>
    </>
  )
}

export default Nav