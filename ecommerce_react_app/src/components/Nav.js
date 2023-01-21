import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <h1>Hi I am nav</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </>
  )
}

export default Nav