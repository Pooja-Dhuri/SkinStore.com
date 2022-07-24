import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";
import { useReducer } from 'react'
import {Reducer,dec,inc} from '../../Reducer/Reducer'
import { CartContext } from '../../Context/CartContext';
import style from './Product.module.css'

const Product = () => {
    const [state,dispatch]=useReducer(Reducer,{count:0})
    const {cartcount,addToCart}=useContext(CartContext)
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
        {/* heading div */}
        <div className={style.productlinkdiv}><Link to="/products" className={style.productlink}>Products</Link></div>
        {/* content div */}
        <div className={style.pimgdiv}>
            {/* left img div */}
          <div>
           <div><img src={product.image1} alt="" className={style.pimg}/></div>
          </div>
          {/* right details div */}
          <div className={style.rightdiv}>
            <div className={style.ptitle}>{product.title}</div>
            <div className={style.ptitle}>${product.price}.00</div>
            <hr />
            <div className={style.Qbtndiv}>
                <div style={{fontSize:"20px"}}>Quantity</div>
                <div className={style.Qbtn}>
                    <button onClick={()=>dispatch(dec)}className={style.singlebtn}disabled={state.count<=1}>-</button>
                    <h3 className={style.singleh3}>{state.count}</h3>
                    <button onClick={()=>dispatch(inc)}className={style.singlebtn}>+</button>
                </div>
            </div>
            <div><button onClick={addToCart} className={style.cartbtn}>ADD TO CART</button></div>
            <div style={{border:"1px solid red",padding:"5px 0px 5px 10px",width:"50%",fontWeight:"30px",marginTop:"20px"}}>{product.offer}</div>
          </div>
        </div>
    </div>
  )
}

export default Product