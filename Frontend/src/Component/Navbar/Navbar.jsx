import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { IoCart, IoLogoFoursquare, IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'
import profile from '../../assets/profile_image.png'
import { FurnitureContext } from '../../Context/FurnitureContext';
import SidebarCart from '../SidebarCart/SidebarCart';

const Navbar = ({setSignUp,menu,setMenu}) => {

    const {token,user,setToken,setUser,userData,cart,setCart,setCartItem,setCartTotalAmount} = useContext(FurnitureContext)

    const [menuOpen,setMenuOpen] = useState(false)
 
    const navigate = useNavigate();

    const logOut = () => {
        let val = ""
        setToken(localStorage.setItem("token",val))
        setUser(false)
        setCartTotalAmount(0)
    }
  return (
    <>
        <div className='navbar'>
            <div className="n-logo">
                <IoLogoFoursquare className='n-icon'/>
                <h1>Furniro</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li   onClick={()=>setMenu("home")}><Link className='n-link' to='/'>Home</Link></li>
                    <li   onClick={()=>setMenu("shop")}><Link className='n-link' to='/shop'>Shop</Link></li> 
                    <li   onClick={()=>setMenu("contact")}><Link className='n-link' to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="nav-fun">
                { token ? <img className='n-icon' onClick={()=>setUser((prev)=>!prev)} src ={profile} /> : <FaRegUser onClick={()=>setSignUp(true)} className='nav-icons'/>}   
                <FiSearch className='nav-icons'/>
                <MdOutlineShoppingCart className='nav-icons' onClick={()=>setCart(true)}/>
                <div className={user?"logout ":"login"}>
                    <div className="login-details">
                        <p>{userData ? userData.name:""}</p>
                        <p>{userData ? userData.email:""}</p>
                    </div>
                    <FiLogOut  onClick={logOut}/>
                </div>
            </div>
            <div className="menu-option">
                <IoMenu onClick={()=>setMenuOpen((prev)=>!prev)} />
            </div>
        </div>
        {
            cart?<SidebarCart />:""
        }
        {
            menuOpen?(
            <div className={`menu-option-item ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li   onClick={()=>{setMenu("home");setMenuOpen(false);}}><Link className='n-link' to='/'>Home</Link></li>
                    <li   onClick={()=>{setMenu("shop");setMenuOpen(false);}}><Link className='n-link' to='/shop'>Shop</Link></li> 
                    <li   onClick={()=>{setMenu("contact");setMenuOpen(false);}}><Link className='n-link' to='/contact'>Contact</Link></li>
                </ul>
                <div className="menu-nav-fun">
                    { token ? <img className='n-icon' onClick={()=>setUser((prev)=>!prev)} src ={profile} /> : <FaRegUser onClick={()=>setSignUp(true)} className='nav-icons'/>}  
                    <MdOutlineShoppingCart className='nav-icons'  onClick={()=>{
                    setCart(false);
                    setMenuOpen(false);
                    navigate('/cart')}}/>    
                    <FiLogOut className='menu-logout'  onClick={logOut}/> 
                </div>
            </div>
            ):""
        }
        
    </>
  )
}

export default Navbar