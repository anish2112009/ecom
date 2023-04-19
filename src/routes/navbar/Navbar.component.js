import React, { Fragment } from 'react'
import { Outlet,Link } from 'react-router-dom'
import { ReactComponent as YourSvg } from './crown.svg';
import "./navbar.scss"

const  Navbar=()=>{

  return (
    <>
    <div className="navbar-container">
        <div className="nav-icon-container"><Link to="/"><YourSvg/></Link></div>
        <div className="shop-link"><Link to="/shop" style={{ textDecoration: 'none', color: 'Black' }}>shop</Link></div>
        <div className="signin-link"><Link to="/signin" style={{ textDecoration: 'none', color: 'Black' }}>signin</Link></div>
        <div className="cart-link">cart</div>
     </div>
     <Outlet/>
     </>
  )
}

export default Navbar
