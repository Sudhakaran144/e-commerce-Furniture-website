import React, { useContext, useEffect, useState } from 'react';
import './SidebarCartItem.css';
import { RxCross1 } from 'react-icons/rx'; 
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { FurnitureContext } from '../../Context/FurnitureContext';

const SidebarCartItem = ({ id, quantity ,handlefunction}) => {
    const { url, handleremoveProduct, token, setCartTotalAmount } = useContext(FurnitureContext);
    const [item, setItem] = useState(null);
    const [page,setPage] = useState(handlefunction)

    const fetchCartItemDetails = async (itemId) => { 
        try {
            const response = await axios.get(`${url}cart/item/list`, {
                params: { itemId }
            });
           
            if (response.data.Success) {
                setItem(response.data.data);
            } else {
                console.log("Error fetching item details:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching item detail:", error);
        }
    };

    useEffect(() => {
        fetchCartItemDetails(id);
    }, [id]);


    const handleRemove = async () => {
        try {
            await handleremoveProduct(id, token); 
            if (item) {
                const total = (item.price * quantity).toFixed(2);
                setCartTotalAmount(prev => (Number(prev) - Number(total)).toFixed(2));
            }
        } catch (error) {
            console.error("Error removing product:", error);
        }
    };

    return (
        <>
            {
                page === "cart" ? (
                    <div className="cart_product_content" key={id}>
                    <div className="cart_product_img"> 
                        <img src={`${url}images/${item ? item.image : "Loading"}`} alt="" />
                    </div>
                    <div className="cart_product_details">
                        <p className='p_name'>{item ? item.name : "Loading..."}</p>
                        <p className='product_price'>{quantity} <RxCross1 className='cross'/> <span>{item ? `Rs. ${(item.price * quantity).toFixed(2)}` : "Loading..."}</span></p>
                    </div>
                    <MdDeleteForever className='cart_remove_item' onClick={handleRemove}/>
                </div>
                ):(
                    <div className="cart-product-details-i">
                        <p className='p_name' style={{color:'grey'}} >{item ? item.name : "Loading..."} <RxCross1 className='cross'/> <span style={{color:"#000",fontWeight:'600'}}>{quantity} </span> </p>
                        <p className='product_price'>{item ? `Rs. ${(item.price * quantity).toFixed(2)}` : "Loading..."}</p>
                    </div>
                )
            }
            
        </>
        
    );
};

export default SidebarCartItem;
