import React from 'react'
import { useState } from 'react';

export const AuthContext=React.createContext();

function AuthContextProvider({children}){
        const [isAuth,setIsAuth]=useState(false)
           const [getlog,setGetlog]=useState({
              email:"",password:""
           })
           const [getdata,setGetData]=useState({
            email1:"",password1:"",fname1:""
           })

           const bringForm=(email1,password1,fname1)=>{
            setGetData({
                ...getdata,email1,password1,fname1
            })
            // console.log(email1,password1)
           }
           const bringLoginform=(email,password)=>{
            setGetlog({
                ...getlog,email,password
            })
            console.log(email,password)
           }

           const login=(email,password,email1,password1)=>{
                  if(email===email1 && password===password1){
                    setIsAuth(true)
                  }
           }
           const logout=()=>{
            setIsAuth(false)
           }
return (
    <AuthContext.Provider value={{bringForm,bringLoginform,login,logout,isAuth,getdata}}>{children}</AuthContext.Provider>
)
}
export default AuthContextProvider