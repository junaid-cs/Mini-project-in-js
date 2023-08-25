import Footer from "./Components/Footer/Footer"
import HeroSec from "./Components/Home/HeroSec/HeroSec"
import Overview from "./Components/Home/Overview/Overview"
import Navbar from "./Components/Navbar/Navbar"


function App() {


  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <HeroSec/>
      <Overview/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App
