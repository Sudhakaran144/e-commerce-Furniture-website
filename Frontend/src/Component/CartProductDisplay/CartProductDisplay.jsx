import React, { useContext, useEffect, useState } from 'react'
import './CartProductDisplay.css'
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md';
import { FurnitureContext } from '../../Context/FurnitureContext';
import { RxCross1, RxMinus, RxPlus } from 'react-icons/rx';

const CartProductDisplay = ({id, quantity }) => {
    const { url, handleremoveProduct, token, setCartTotalAmount,handleAddToCart,handledeleteProduct,cartTotalAmount} = useContext(FurnitureContext);
    const [item, setItem] = useState(null);

    const fetchCartItemDetails = async (itemId) => { 
        
        try {
            const response = await axios.get(`http://localhost:4000/cart/item/list`, {
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

    const handleAdd = async ()=> {
        try{
            await handleAddToCart(id,token);
             
        }
        catch (error) {
            console.error("Error removing product:", error);
        }
    }
    const handledelete = async ()=> {
        try{
            await handledeleteProduct(id,token);
            if (item) {
                const total = (item.price * quantity).toFixed(2);
                setCartTotalAmount(prev => (Number(prev) - Number(total)).toFixed(2));
            }
        }
        catch (error) {
            console.error("Error removing product:", error);
        }
    }

  return (
    <div className='cart-product-display'>
        <div className="cartproduct-display-img"> 
            <img src={`http://localhost:4000/images/${item ? item.image : "Loading"}`} alt="" />
            <p className='cart_p_name'>{item ? item.name : "Loading..."}</p>
        </div>
        <div className="cart_product_display_details">
            <RxMinus className='item-remove-icon cart-item-icon' onClick={handleRemove}/>
            <p>{quantity}</p>
            <RxPlus className='item-add-icon cart-item-icon' onClick={handleAdd}/>
        </div>
        <div className="cart_product_price">
            <span>{item ? `Rs. ${(item.price).toFixed(2)}` : "Loading..."}</span>
        </div>
        <MdDeleteForever className='cart_product_remove_item' onClick={handledelete}/>
    </div>
  )
}

export default CartProductDisplay