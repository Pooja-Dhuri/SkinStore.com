import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import style from "./Products.module.css"
import Sidebar from "../Sidebar/Sidebar"
import { Link } from 'react-router-dom'
import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
  } from '@chakra-ui/react';

const Products = () => {
    const [prodata,setProData]=useState([])
    const [page,setPage]=useState(0)
    const [ascdesc,setAscDesc]=useState("desc")
    // const [filterRating, setFilterRating] = useState(5);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(()=>{
        axios.get(`http://localhost:8080/skincareproducts?_page=${page}&_limit=13&_sort=price&_order=${ascdesc}`)
        .then((res)=>{
            setProData(res.data)
        })
        .catch((err)=>{
            console.log("err")
        })
    },[page,ascdesc])
    function handleChange(e){
          e.preventDefault()
          console.log(e.target.value)
          setAscDesc(e.target.value)
    }


  return (
    <>
    
    <div className={style.contentdata}>
        {/* sidebar */}
        <div>
        <Sidebar/>
        </div>
    <div className={style.productmapdiv}>
       <h6>25results</h6>
       <div className={style.page}>
        {/* paginatin and filteration */}
        <div>
            <div>
                <h4>Filter:</h4>
            <select name="" id=""onClick={handleChange}>
                <option value="default">Default</option>
                <option value="4">Popularity</option>
                
                <option value="asc">Price:low to high</option>
                
                <option value="desc">Price:high to low</option>


                {/* <option value="A-Z">A-Z</option>
                <option value="newestarrivals">Newest arrival</option> */}
            </select>
            </div>
        </div>
        <div className={style.pagebtn}>
            <div><button onClick={()=>setPage(page-1)}disabled={page<=1}>less</button></div>
            <div><button onClick={()=>setPage(page-1)} >1</button></div> 
            <div><button onClick={()=>setPage(page+1)}>2</button></div>
            <div><button onClick={()=>setPage(page+1)}disabled={page>=2}>greater</button></div>
            
        </div>
        </div>

    {/* all mapped product */}
    <div className={style.productmap}>
        
            {
                prodata.map((e)=>(
                    <div>
                    <div>icon</div>
                    <Link to={`/products/${e.id}`}>
                    <div><img src={e.image1} alt="" /></div></Link>
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
    </div>
    </>
  )
}

export default Products