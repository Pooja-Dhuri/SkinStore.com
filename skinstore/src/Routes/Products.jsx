import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import style from "./Products.module.css"

const Products = () => {
    const [prodata,setProData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/skincareproducts")
        .then((res)=>{
            setProData(res.data)
        })
        .catch((err)=>{
            console.log("err")
        })
    },[])


  return (
    <>
    <div>
        {/* paginatin and filteration */}
    </div>
    <div>
        {/* sidebar */}
    <div></div>
    {/* all mapped product */}
    <div className={style.productmap}>
            {
                prodata.map((e)=>(
                    <div>
                    <div>icon</div>
                    <div><img src={e.image1} alt="" /></div>
                    <div>{e.title}</div>
                    <div>{e.offer}</div>
                    <div>{e.star}</div>
                    <div>{e.price}</div>
                    <div><button>QUICK BUY</button></div>
                    </div>
                ))
            }
    </div>
    </div>
    </>
  )
}

export default Products