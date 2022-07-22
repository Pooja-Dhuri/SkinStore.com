import React from 'react'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const AllRoutes = () => {
  return (
    <div>
     <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default AllRoutes