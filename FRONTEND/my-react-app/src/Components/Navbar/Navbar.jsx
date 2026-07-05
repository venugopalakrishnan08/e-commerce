import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("mens")}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("womens")}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("kids")}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems ? getTotalCartItems() : 0}</div>
      </div>
    </div>
  );
};