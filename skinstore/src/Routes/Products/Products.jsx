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
  import {AiOutlineLeft,AiOutlineRight,AiOutlineHeart} from 'react-icons/ai'


const Products = () => {
   
    const [prodata,setProData]=useState([])
    const [page,setPage]=useState(0)
    const [ascdesc,setAscDesc]=useState("desc")
    // const [filterRating, setFilterRating] = useState(5);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(()=>{
        axios.get(`https://jsonserverfileapi.herokuapp.com/skincareproducts?_page=${page}&_limit=13&_sort=price&_order=${ascdesc}`)
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
       <div><h4>12results</h4></div>
       <div className={style.page}>
        {/* filteration */}
        <div className={style.filterdiv}>
                <div><h4>Sort By</h4></div>
                 <div ><select name="" id=""onClick={handleChange}className={style.selectdiv}>
                <option value="default">Default</option>
                <option value="4">Popularity</option>
                
                <option value="asc">Price:low to high</option>
                
                <option value="desc">Price:high to low</option>


                {/* <option value="A-Z">A-Z</option>
                <option value="newestarrivals">Newest arrival</option> */}
                </select></div>
        </div>
        {/* pagination */}
        <div className={style.pagebtn}>
            <div><button onClick={()=>setPage(page-1)}disabled={page<=1}className={style.singlebutton}><AiOutlineLeft/></button></div>
            <div><button onClick={()=>setPage(page-1)} className={style.singlebutton1}>1</button></div> 
            <div><button onClick={()=>setPage(page+1)}className={style.singlebutton1}>2</button></div>
            <div><button onClick={()=>setPage(page+1)}disabled={page>=2}className={style.singlebutton}><AiOutlineRight/></button></div>
            
        </div>
        </div>

    {/* all mapped product */}
    <div className={style.productmap}>
        
            {
                prodata.map((e)=>(
                    <div className={style.gapmap}>
                    <div style={{display:"flex",flexDirection:"row-reverse"}}><AiOutlineHeart style={{height:"30px",width:"30px"}}/></div>
                    <Link to={`/products/${e.id}`}>
                    <div><img src={e.image1} alt="" /></div></Link>
                    <div>{e.title}</div>
                    <div style={{border:"1px solid red",padding:"10px 0px 10px 10px",width:"50%",fontWeight:"30px",marginTop:"20px"}}>{e.offer}</div>
                    {/* <div>{e.star}</div> */}
                    <div><h3>${e.price}.00</h3></div>
                    <div><button style={{width:"100%",height:"45px",backgroundColor:"#2E3337",color:"white",border:"0px"}}>QUICK BUY</button></div>
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