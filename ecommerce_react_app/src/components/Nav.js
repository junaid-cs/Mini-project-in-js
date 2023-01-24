import {Link} from 'react-router-dom';
// import Logo from '../images/logo192.png'
import './Nav.css';
const Nav = () => {
  return  (
    <>
    <nav className='container d-flex justify-content-between'>
    
    <Link to='/'> <img style={{height: 45}} src='/images/logo512.png' alt='Logo'></img> </Link>
    <ul className='d-flex'>
      <li className='p-2 nav_link'>
    <Link to='/'>Home</Link>
      </li>
      <li className='p-2 nav_link'>
    <Link to='/products'>Products</Link>
      </li>
      <li className='p-2 nav_link'>
    <Link to='/caret'>Caret</Link>
      </li>

    </ul>
    </nav>
    </>
  )
}

export default Nav