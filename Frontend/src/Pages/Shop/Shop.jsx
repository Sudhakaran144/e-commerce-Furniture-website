import React, { useContext } from 'react'
import './Shop.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import HeadConatiner from '../../Component/HeadContainer/HeadConatiner'
import { FurnitureContext } from '../../Context/FurnitureContext'
import HPdisplay from '../../Component/HPdisplay/HPdisplay'
import Filter from '../../Component/Filter/Filter'

const Shop = ({banner}) => {
  const {products} = useContext(FurnitureContext);
  return (
    <div>
      <HeadConatiner banner = {banner} />
      <Filter />
      <HPdisplay display = "Shop" />
      <Footer />
    </div>
  )
}

export default Shop