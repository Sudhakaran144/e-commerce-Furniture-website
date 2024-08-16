import React, { useContext } from 'react'
import './BillingDetails.css'
import { FurnitureContext } from '../../Context/FurnitureContext'
import SidebarCartItem from '../SidebarCarItem/SidebarCartItem'

const BillingDetails = () => {
    const {cartItem,cartTotalAmount} = useContext(FurnitureContext)
  return (
    <div className='checkout'>
        <div className="checkout-left">
            <h2>Billing Details</h2>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div className="checkout-name-field">
                    <label>Last Name</label>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Company Name(optional)</label>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Country/Region</label>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Street Address</label>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Town / City</label>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Province</label>
                    <input type="text" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Zip Code</label>
                    <input type="number" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Phone</label>
                    <input type="number" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <label>Email Address</label>
                    <input type="email" />
                </div>
            </div>
            <div className="checkout-field">
                <div className="checkout-name-field">
                    <input type="text" placeholder='Addition Information' />
                </div>
            </div>
        </div>
        <div className="checkout-right">
            <div className="checkout-product-details">
                <div className="checkout-product-details-header">
                    <h2>Product</h2>
                    <h2>SubTotal</h2>
                </div>
                <div className="checkout-product-details-item">
                    {
                        Object.keys(cartItem).map((itemId) => {
                            const quantity = cartItem[itemId];
                            return (
                                <SidebarCartItem
                                    key={itemId}
                                    id={itemId}
                                    quantity={quantity}
                                    handlefunction={"checkout"}
                                />
                            );
                        })
                    }
                </div>
                <div className="checkout-product-details-total">
                    <p>Total</p>
                    <h2>Rs {cartTotalAmount}</h2>
                </div>
            </div>
            <hr />
            <div className="checkout-place-order">
                <button className='placeorder'>Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default BillingDetails