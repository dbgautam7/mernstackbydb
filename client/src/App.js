import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Register from './components/Register'
import Signin from './components/Signin'
import {BrowserRouter,Router,Routes,Route,Link} from 'react-router-dom';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App