import React from 'react'
import './SliderProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import image1 from '../../assets/image33.png'
import image2 from '../../assets/image34.png'
import image3 from '../../assets/image35.png'
import image4 from '../../assets/image30.jpg'
import image5 from '../../assets/image29.jpg'

const SliderProduct = () => {
  return (
    <div className='sliderProduct'>
        <div className="spleft">
            <h1>50+ Beautiful rooms inspiration</h1>
            <p>Our designer already made a lot of beatiful prototype of room that inspire you</p>
            <button className="spbtn">Explore More</button>
        </div>
        <div className="spright">
            <div className="imgContainer">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img  src={image1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
            </Swiper>
            </div>
            
        </div>
    </div>
  )
}

export default SliderProduct