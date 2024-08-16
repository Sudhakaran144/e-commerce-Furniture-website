import React from 'react'
import './Sidebar.css' 
import { Link, NavLink } from 'react-router-dom'
import { IoAdd } from 'react-icons/io5'
import { FaList } from 'react-icons/fa'
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-content">
            <NavLink to='/add' className="sidebar-option">
                <IoAdd />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <FaList />
                <p>List Items</p>
            </NavLink>
            <Link to='/'  className="sidebar-logout">
                <CiLogout />
                <p>Log Out</p>
            </Link>
            
        </div>
    </div>
  )
}

export default Sidebar