import React from 'react'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home/Home'
import Login from './Register/Login'
import Register from './Register/Register'
import Products from './Products/Products'
import Product from './Product/Product'

const AllRoutes = () => {
  return (
    <div>
     <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/products'element={<Products/>}/>
        <Route path='Products/:id'element={<Product/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default AllRoutes