import Products from '../components/Products_list'
import './Home.css';
const Home = () => {
  return  (
        <>
            <div className='hero py-3 container'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='hero-content ms-5 '>
                 <div className='fs-7 mb-0 italic'>
                  Are you hungry?
                  </div>
                 <div className='fs-2 fw-bold pt-0 mt-0'>
                  Don't wait !
                  </div>
                   <br/>
                  <a href='#' className='btn btn-yellow'>Shop</a>
                </div>
                <div className='hero-img'>
                  <img style={{height:450}} className='me-5 pe-5 pt-0 mt-0' src='/images/logo192.png'></img>
                </div>

              </div>
            </div>
            <div className='products-list'>
              <Products />
            </div>
            </>
          )
}

export default Home