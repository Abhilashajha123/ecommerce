import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Product from './component/Product'
import Header from '../src/component/Header'
import Productdetail from './component/Productdetail'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about"  element={<About />}></Route>
        <Route path="/product"  element={<Product />}></Route>
        <Route path="/product/:id"  element={<Productdetail />}></Route>
        <Route path="/contact"  element={<Contact />}></Route>
      </Routes>
    
        
    </div>
  )
}

export default App
