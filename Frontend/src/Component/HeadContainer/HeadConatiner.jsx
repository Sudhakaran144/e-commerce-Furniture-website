import React from 'react'
import './HeadConatiner.css'
import { IoLogoFoursquare } from "react-icons/io5";
import { FaGreaterThan } from 'react-icons/fa';

const HeadConatiner = ({banner}) => {
  return (

    <div className='banner'>
         <div className="banner_container">
         </div>
        <div className="banner_details">
            <IoLogoFoursquare className='n-icon'/>
            <h2>{banner}</h2>
            <h4>Home <FaGreaterThan className='ic'/> <span>{banner}</span></h4>
        </div>
    </div>
  )
}

export default HeadConatiner