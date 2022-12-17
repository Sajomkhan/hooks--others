import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Style.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/" className="navlink" >Home</NavLink>
        <NavLink to="/blogs" className="navlink" >Blogs</NavLink>
        <NavLink to="/contact" className="navlink" >Contact</NavLink>        
    </nav>
  )
}

export default NavBar