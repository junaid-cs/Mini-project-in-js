import Products from '../components/Products_list'
import './Home.css';
const Home = () => {
  return  (
        <>
            <div className='hero py-3 container'>
              <div className='d-flex justify-content-between align-items-center row flex-column-reverse flex-md-row'>
                <div className='hero-content ms-5  col-6 col-md-4 col-lg-4'>
                 <div className='fs-7 mb-0 italic'>
                  Are you hungry?
                  </div>
                 <div className='fs-2 fw-bold pt-0 mt-0'>
                  Don't wait !
                  </div>
                   <br/>
                  <a href='#' className='btn btn-yellow ms-4 ms-md-0'>Shop</a>
                </div>
                <div className='hero-img col-12 col-sm-9 col-md-6'>
                  <img  className='me-sm-5 w-100 pe-sm-5 pt-0 mt-0' src='/images/pizza.png'></img>
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