import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
const App = () => (
    <>
    <Router>
        <Nav />
            <Route path='/' component={Home}></Route>
            <Route path='/About' component={About}></Route>
    </Router>
    </>
)

export default App