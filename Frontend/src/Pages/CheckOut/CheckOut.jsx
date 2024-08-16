import React, { useEffect } from 'react'
import './CheckOut.css'
import HeadConatiner from '../../Component/HeadContainer/HeadConatiner'
import BillingDetails from '../../Component/BillingDetails/BillingDetails'
import Footer from '../../Component/Footer/Footer'

const CheckOut = ({banner}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [banner])
  return (
    <div className='Check'>
        <HeadConatiner banner = {banner} />
        <BillingDetails />
        <Footer />
    </div>
  )
}

export default CheckOut