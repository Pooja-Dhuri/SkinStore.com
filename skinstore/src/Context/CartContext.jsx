import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartcount,setCartCount]=useState(0)
    const addToCart=()=>{
        setCartCount(cartcount+1)
    }
    return(
        <CartContext.Provider value={{cartcount,addToCart}}>{children}</CartContext.Provider>
    )
}