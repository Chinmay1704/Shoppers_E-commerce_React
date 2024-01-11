import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
import Logo from "../Assets/logo.png";
import Carticon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import DropdownArrow from "../Assets/dropdown_arrow.png"

const Navbar = () => {
  const [menu, setMenu] = useState("shop"); 
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef();

  const dropDownToggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open');
  }

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
          <p>SHOPPER</p>
        </div>

        <img className="nav-dropdown" onClick={dropDownToggle} src={DropdownArrow} alt="down arrow" />
        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link style={{textDecoration: 'none', color:'black'}} to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link style={{textDecoration: 'none', color:'black'}} to="/men">Men</Link> {menu === "Men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link style={{textDecoration: 'none',color:'black'}} to="/women">Women</Link> {menu === "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link style={{textDecoration: 'none', color:'black'}} to="/kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to='/cart'><img src={Carticon} alt="cart" /></Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
