import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { FaSistrix, FaUserAlt, FaShoppingBasket } from "react-icons/fa";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  Button,
  MenuList,
  useColorModeValue,
  border,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const {isAuth,getdata}=useContext(AuthContext)
  const {cartcount}=useContext(CartContext)
  console.log(getdata)
  // const value=getdata.fname1
  const navigate=useNavigate()
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
  const {
    isOpen: isLogin1Open,
    onOpen: onLogin1Open,
    onClose: onLogin1Close,
  } = useDisclosure();
 
  function handleClick(){
    navigate("/login")
  }
  function handlereg(){
    navigate("/register")
  }
  function handlelogout(){
    window.location.reload()
  }
  return (
    <>
      {/* main div */}
      <div className={style.maindiv}>
        {/* Upper div */}
        <div className={style.uppercontainer}>
          {/* logo */}
          <div className={style.logodiv}>
            <Link to="/">
              <img
                className={style.image}
                src="data:image/png;base64,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"
              />
            </Link>
          </div>

          {/* serchbar */}
          <div className={style.searchbardiv}>
            <input
              className={style.searchbar}
              placeholder="seacrh for a product or Brand..."
            />
            <div>
              <FaSistrix className={style.iconglass} />
            </div>
          </div>

          {/* login cart div */}
          <div className={style.logincartdiv}>
            {/* login div */}
            <div>
              {!isAuth?<Menu isOpen={isLoginOpen}>
                <MenuButton
                  variant="outline"
                  mx={1}
                  py={[, 2, 2]}
                  px={4}
                  aria-label="Courses"
                  fontWeight="200px"
                  border={0}
                  className={style.loginbutton}
                  onMouseEnter={onLoginOpen}
                  onMouseLeave={onLoginClose}
                >
                  <FaUserAlt className={style.icon} />
                  <Link to="/login" className={style.login}>
                    Account
                  </Link>
                </MenuButton>
                <MenuList
                  onMouseEnter={onLoginOpen}
                  onMouseLeave={onLoginClose}
                  className={style.dropdownlogin}
                >
                  <MenuItem
                    style={{
                      width: "260px",
                      height: "40px",
                      margin: "30px 30px 10px 20px",
                      backgroundColor: "black",
                      color: "white",
                      paddingLeft:"100px"
                    }}onClick={handleClick}
                  >
                    LOGIN
                  </MenuItem>
                  <MenuItem
                    style={{
                      width: "260px",
                      height: "40px",
                      margin: "10px 30px 30px 20px",
                      paddingLeft:"100px"
                    }}onClick={handlereg}
                  >
                    REGISTER
                  </MenuItem>
                </MenuList>
              </Menu>:
              <Menu isOpen={isLogin1Open}>
              <MenuButton
                variant="outline"
                mx={1}
                py={[, 2, 2]}
                px={4}
                aria-label="Courses"
                fontWeight="200px"
                border={0}
                className={style.loginbutton}
                onMouseEnter={onLogin1Open}
                onMouseLeave={onLogin1Close}
              >
                <Link to="/login" className={style.cart}>
                <FaUserAlt className={style.icon} />
                  Account
                </Link>
              </MenuButton>
              <MenuList
                onMouseEnter={onLogin1Open}
                onMouseLeave={onLogin1Close}
                className={style.dropdownlogin1}
              >
                <MenuItem style={{
                      width: "50px",
                      height: "40px",
                      margin: "10px 30px 30px 20px",
                      paddingLeft:"10px",
                      border:"0px",
                      fontSize:"20px"
                    }}>Hii_Pooja</MenuItem>
                <MenuItem onClick={handlelogout}
                style={{
                  width: "50px",
                  height: "40px",
                  margin: "10px 30px 30px 20px",
                  paddingLeft:"40px",
                  border:"0px",
                  fontSize:"20px",
                }}
                >LOGOUT</MenuItem>
              </MenuList>
            </Menu>
              }
            </div>
            {/* cart div */}
            <div>
              <Menu isOpen={isCartOpen}>
                <MenuButton
                  variant="outline"
                  mx={1}
                  py={[, 2, 2]}
                  px={4}
                  _hover={{ bg: useColorModeValue("white.100", "white.700") }}
                  aria-label="Courses"
                  fontWeight="200px"
                  border={0}
                  className={style.loginbutton}
                  onMouseEnter={onCartOpen}
                  onMouseLeave={onCartClose}
                >
                  <Link to="/cart" className={style.cart}>
                    <div style={{display:"flex"}}>
                    <div><FaShoppingBasket className={style.icon} /></div>
                    <div>{cartcount}</div></div>
                    Cart
                  </Link>
                </MenuButton>
                <MenuList
                  onMouseEnter={onCartOpen}
                  onMouseLeave={onCartClose}
                  className={style.dropdownlogin}
                >
                  <MenuItem  style={{
                  width: "50px",
                  height: "40px",
                  margin: "10px 30px 30px 20px",
                  paddingLeft:"40px",
                  border:"0px",
                  fontSize:"20px",
                }}>Count:{cartcount}</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <div className={style.hrtagdiv}>
          <hr className={style.hrtag} />
        </div>

        {/* lower div */}
        <div className={style.lowercontainer}>
          <div><p>Brands</p></div>
          <div><p>Summer Shop</p></div>
          <div><p>Sale</p></div>
          <div><p>Build a Routine</p></div>
          <div><p>Skin-Care</p></div>
          <div><p>Hair</p></div>
          <div><p>MakeUp</p></div>
          <div><p>Tools</p></div>
          <div><p>Bath& Body</p></div>
          <div><p>Self-care</p></div>
          <div><p>Fragrance</p></div>
          <div><p>new & Trending</p></div>
          <div><p>Advice</p></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
