import React, { useContext, useState } from 'react'
import './SidebarCart.css' 
import { IoCart} from "react-icons/io5"; 
import { FurnitureContext } from '../../Context/FurnitureContext';
import { useNavigate } from 'react-router-dom';
import SidebarCartItem from '../SidebarCarItem/SidebarCartItem';

const SidebarCart = () => {
    const {setCart,cartItem,cartTotalAmount} = useContext(FurnitureContext)
    const navigate = useNavigate();
    
  return (
    <div className="cart_Sidebar">
        <div className="cart_sidebar_content">
            <div className="cart_sidebar_name">
                <h3>Shopping Cart</h3>
                <IoCart  onClick={()=>setCart(false)}/>
            </div>
            <hr />
            <div className="all_cart_items">
                {
                    Object.keys(cartItem).map((itemId) => {
                        const quantity = cartItem[itemId];
                        return (
                            <SidebarCartItem
                                key={itemId}
                                id={itemId}
                                quantity={quantity}
                                handlefunction={"cart"}
                            />
                        );
                    })
                }
            </div>
            <div className="cart_sidebar_total">
                <div className="cart_sidebar_total_name">
                    <p>Subtotal</p>
                </div>
                <div className="cart_sidebar_total_amount">
                    <p>{cartTotalAmount}</p>
                </div>
            </div>
            <hr />
            <div className="cart_sidebar_footer">

                <button className="cart_btn " onClick={()=>{
                    setCart(false);
                    navigate('/cart')}}
                >Cart</button>
                <button className="checkout_btn " onClick={()=>{setCart(false);navigate('/checkout')}}>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default SidebarCart