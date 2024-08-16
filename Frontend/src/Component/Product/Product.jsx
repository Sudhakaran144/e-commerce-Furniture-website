import React, { useContext } from 'react'
import './Product.css'
import { FurnitureContext } from '../../Context/FurnitureContext'
import { Link } from 'react-router-dom'

const Product = ({ id,name,category,actualPrice,discountprice,discountPercentage,image}) => {
    const {handleAddToCart, handleViewProduct,token} = useContext(FurnitureContext)
  return (
    <div className='product' key={id} >    
        <div className="p-container"  >
            <Link to={`/product/${id}`}>
                <img src={`http://localhost:4000/images/${image}`} onClick={() => handleViewProduct(id)} alt="" />
            </Link>
             <div className="p-details">
                <h4>{name}</h4>
                <h5 className='p-d-c'>{category}</h5>
                 { 
                    !discountPercentage? (
                        <p>Rs {actualPrice}</p>
                    ):(
                        <div className='p-price'>
                            <p>Rs {discountprice}</p>
                            <p className='d-p'>Rs {actualPrice}</p>
                        </div>
                    )
                 }
                <div className="addtocart">
                    <button className='AtC' onClick={() => handleAddToCart(id,token)}>Add to Cart</button>
                </div>
            </div>
            {               
                discountPercentage? (
                    <div className="discountPer">
                        <p>{discountPercentage<10?`0${discountPercentage}`:discountPercentage}%</p>
                    </div>
                ):""
            }
            
            
        </div>  
       
    </div>
  )
}

export default Product