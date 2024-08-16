import React, { useEffect } from 'react'
import './Cart.css'
import HeadConatiner from '../../Component/HeadContainer/HeadConatiner' 
import Footer from '../../Component/Footer/Footer'
import CartProduct from '../../Component/CartProduct/CartProduct'

const Cart = ({banner}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [banner])
  return (
    <div>
      <HeadConatiner banner = {banner} /> 
      <CartProduct />
      <Footer />
    </div>
  )
}

export default Cart