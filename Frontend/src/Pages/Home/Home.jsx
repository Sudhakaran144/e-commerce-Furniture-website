import React from 'react'
import './Home.css' 
import Header from '../../Component/Header/Header'
import Category from '../../Component/Category/Category'
import HPdisplay from '../../Component/HPdisplay/HPdisplay'
import SliderProduct from '../../Component/SliderProduct/SliderProduct'
import FurSetUp from '../../Component/FurSetUp/FurSetUp'
import Footer from '../../Component/Footer/Footer'

const Home = ({setMenu}) => {
  return (
    <div className='home'>
        <Header />
        <Category />
        <HPdisplay display = "Home" setMenu={setMenu} />
        <SliderProduct />
        <FurSetUp />
        <Footer />
    </div>
  )
}

export default Home