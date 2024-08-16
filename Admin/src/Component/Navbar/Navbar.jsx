import React from 'react'
import './Navbar.css'
import { IoLogoFoursquare } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-content">
            <div className="n-logo">
                <IoLogoFoursquare className='n-icon'/>
                <h1>Furniro</h1>
            </div>
            <div className="nav-fun">
                <FaRegUser className='nav-icons'/>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar