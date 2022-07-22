import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Register.module.css'

const Login = () => {
  const [logindata,setLoginData]=useState({
    email:"",password:""
  })
  function handleChange(e){
    const {name,value}=e.target
    setLoginData({
        ...logindata,[name]:value
    })
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
                <button className={style.clickloginbtn}>SIGN IN</button>
      </div>
      <div className={style.pdiv}><p>Or continue with</p>
      </div>
      <div className={style.btndiv} >
                <div><button className={style.loginbtn}>facebook</button></div>
                <div><button className={style.loginbtn}>Google</button></div>
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