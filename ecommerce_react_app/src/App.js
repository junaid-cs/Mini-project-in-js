import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home'
import About from './pages/About'
const App = () => (
    <>
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </Router>
    </>
)

export default App