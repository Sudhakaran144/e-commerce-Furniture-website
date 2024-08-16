import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import { FaGreaterThan } from 'react-icons/fa'
import ProductDetails from '../../Component/ProductDetails/ProductDetails'
import { FurnitureContext } from '../../Context/FurnitureContext'

const ProductPage = () => {
    const { productDetails, handleViewProduct, token } = useContext(FurnitureContext)
    const { id } = useParams()   

    useEffect(() => {
        if (id) {
            handleViewProduct(id)    
        }
    }, [id, token])

    return (
        <div className='product-page'>
            <div className="product-page-header">  
                <h4>Home</h4>
                <FaGreaterThan className='ic'/> 
                <h4>Shop</h4>
                <h4>|</h4>
                <h4>{productDetails ? productDetails.name : 'Loading...'}</h4>
            </div>
            <ProductDetails productDetails={productDetails} />
        </div>
    )
}

export default ProductPage
