import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './home/Home'
import ProductView from './product-view/ProductView'
import Services from './services/Services'
import About from './about/About'
import Contact from './contact/Contact'

const RootRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-view/:id' element={<ProductView/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default RootRoute