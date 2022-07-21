import React,{useState} from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Register.module.css'
import { FcGoogle } from 'react-icons/fa'


const Register = () => {
    const ref=useRef()
    const navigate=useNavigate()
    const [data,setData]=useState({
        fname:"",email:"",password:"",mobile:"",referal:""
    })
  function handleChange(e){
    const {name,value}=e.target
    setData({
        ...data,[name]:value
    })
  }
  function handleclick(e){
    e.preventDefault()
    ref.current.focus()
    if(data.fname.length===0 || data.email.length===0 || data.password.length===0){
        alert("plz fill the details")
    }
    else{
        navigate("/login")
    }
     
  }

  return (
    <div className={style.maindiv}>
        <div className={style.formdiv}>
        <form  >
            <h1 className={style.head}>About You</h1>
            <h2 className={style.head}>Sign Up With</h2>
            <div className={style.btndiv} >
                <div><button className={style.btn}>facebook</button></div>
                <div><button className={style.btn}><FcGoogle/> Google</button></div>
            </div>
            <div><hr className={style.hrtag}/></div>
            
            <h2>Or create an email account</h2>
            <div>
                <h4>*Full Name</h4>
                <input type="text" onChange={handleChange}name="fname"value={data.fname}ref={ref}className={style.inputdiv}/>
            </div>
            <div>
                <h4>*Email address</h4>
                <input type="email" onChange={handleChange}name="email"value={data.email}className={style.inputdiv}/>
            </div>
            <div>
                <h4>*Confirm Email address</h4>
                <input type="email"className={style.inputdiv}/>
            </div>
            <div>
                <h4>*Password</h4>
                <input type="password"onChange={handleChange}name="password"value={data.password} className={style.inputdiv}/>
                <h5>Include a minimum of 6 characters, and contain at least 1 number</h5>
            </div>
            <div>
                <h4>*Confirm Password</h4>
                <input type="password"className={style.inputdiv}/>
            </div>
            <div>
                <h4>Cell Phone Number(Optional)</h4>
                <input type="number" onChange={handleChange}name="mobile"value={data.mobile}className={style.inputdiv}/>
                <h5>We will use this number to send occasional promotional messages.</h5>
            </div>
            <div className={style.referal}>
                <h4>Referral Code(Optional)</h4>
                <input type="number" onChange={handleChange}name="referal"value={data.referal}className={style.inputdiv}/>
                <h5>* Your referrals discount is automatically applied at cart</h5>
            </div>
            <div>
                <button onClick={handleclick}className={style.clickbtn}>Continue</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register