import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { NavLink } from "react-router-dom";
import './Style.css'

//not used due to hover problem
const navLink = {
        color: 'white',
        margin: '1rem',
        textDecoration: 'none',
        fontFamily: 'arial',
        }
  
const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/blogs" className="navlink">Blogs</NavLink>
      <NavLink to="/contact" className="navlink">Contact</NavLink>
    </nav>
  );
};

export default NavBar;
