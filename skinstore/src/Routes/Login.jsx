import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import style from './Register.module.css'

const Login = () => {
  const navigate=useNavigate()
  const {bringLoginform,login,logout,isAuth}=useContext(AuthContext)
  const [logindata,setLoginData]=useState({
    email:"",password:""
  })
  function handleChange(e){
    const {name,value}=e.target
    setLoginData({
        ...logindata,[name]:value
    })
  }
  function handleLoginClick(e){
    e.preventDefault()
    bringLoginform(logindata.email,logindata.password)
      if(isAuth===false){
        logout()
        alert("wrong email or password")
        
      }else{
        login()
        navigate("/")
        alert("login successfull")
      }
  }
  return (
    <div className={style.mainlogindiv}>
      <div className={style.formlogindiv}>
        <form>
      <h2>Existing Customers</h2>
      <div>
                <h4>*Email address</h4>
                <input type="email" onChange={handleChange}name="email"value={logindata.email}className={style.inputlogindiv}/>
      </div>
      <div>
                <h4>*Password</h4>
                <input type="password"onChange={handleChange}name="password"value={logindata.password} className={style.inputlogindiv}/>
      </div>
      <div className={style.loglink}>
        <Link to="">FORGOTTEN YOUR PASSWORD?</Link>
      </div>
      <div>
                <button className={style.clickloginbtn} onClick={handleLoginClick}>SIGN IN</button>
      </div>
      <div className={style.pdiv}><p>Or continue with</p>
      </div>
      <div className={style.btndiv} >
                <div><button className={style.loginbtn}><img src="https://findicons.com/files/icons/2287/32_pixel_social_media_icons/32/facebook.png"className={style.socialicon}/>facebook</button></div>
                <div><button className={style.loginbtn}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32muOrsvvzFQKEgFJA65MK6mtDXXaEAKUkCi5YKFzZg&s"className={style.socialicon}/>Google</button></div>
     </div>
    </form>
    </div>
      <div className={style.formlogindiv}>
        <div className={style.newR}>
        <div>
          <h2>New Coustomers</h2>
        </div>
        <div>
        <button className={style.clickloginbtn}>REGISTER</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login