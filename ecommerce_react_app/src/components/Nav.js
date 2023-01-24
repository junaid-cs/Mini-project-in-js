import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return  (
    <>
    <nav className='container d-flex justify-content-between p-1'>
    
    <Link to='/'>  <h2>Logo</h2></Link>
    <ul className='d-flex'>
      <li className='p-2'>
    <Link to='/'>Home</Link>
      </li>
      <li className='p-2'>
    <Link to='/about'>About</Link>
      </li>

    </ul>
    </nav>
    </>
  )
}

export default Nav