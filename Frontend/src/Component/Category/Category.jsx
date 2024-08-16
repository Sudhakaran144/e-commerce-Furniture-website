import React from 'react'
import './Category.css' 
import image1 from '../../assets/image33.png'
import image2 from '../../assets/image34.png'
import image3 from '../../assets/image35.png'

const Category = () => {
  return (
    <div className='category'>
        <h1>Browse the Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="p-category">
            <div className="cat-1">
                <img src={image1} alt="" />
                <p>Dinning</p>
            </div>
            <div className="cat-1">
                <img src={image2} alt="" />
                <p>Living</p>
            </div>
            <div className="cat-1">
                <img src={image3} alt="" />
                <p>Bedroom</p>
            </div>
        </div>
    </div>
  )
}

export default Category