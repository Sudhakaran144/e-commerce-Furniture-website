import React, { useContext } from 'react'
import './CartProduct.css'
import { FurnitureContext } from '../../Context/FurnitureContext'
import CartProductDisplay from '../CartProductDisplay/CartProductDisplay'
import { useNavigate } from 'react-router-dom'

const CartProduct = () => {
    const {setCart,cartItem,cartTotalAmount} = useContext(FurnitureContext)
    const navigate = useNavigate();
  return (
    <div className='CartProduct'>
        <div className="cartProduct-left">
            <div className="cartProduct-left-header">
                <h4>Product</h4>
                <h4>Quantity</h4>
                <h4>Price</h4>
                <h4>Remove</h4>
            </div>
            <div className="cartProduct-left-product">
                {
                    Object.keys(cartItem).map((itemId) => {
                        const quantity = cartItem[itemId];
                        return (
                            <CartProductDisplay
                                key={itemId}
                                id={itemId}
                                quantity={quantity}
                            />
                        );
                    })
                }
            </div>
        </div>
        <div className="cartProduct-right">
            <div className="cartProduct-right-total">
                <h2>Cart Total</h2>
                <div className="cartProduct-right-totalAmount">
                    <h4>Total Amount</h4>
                    <p>Rs {cartTotalAmount}</p>
                </div>
                <div className="cartproduct-checkout">
                    <button className="checkout-btn" onClick={()=>{setCart(false);navigate('/checkout')}}>Check Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProduct