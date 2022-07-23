import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Product = () => {
    const [product,setProduct]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/skincareproducts/${id}`)
            .then((res)=>res.json())
            .then((d)=>setProduct(d))
        }
    },[id])
  return (
    <div>
        <Link to="/products">Products</Link>
        <div><img src={product.image1}/></div>
    </div>
  )
}

export default Product