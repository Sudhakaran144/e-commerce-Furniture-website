import React, { useState, useEffect, useContext } from 'react'; 
import './ProductDetails.css'; 
import { FaFacebook, FaLinkedin, FaMinus, FaPlus, FaTwitter } from 'react-icons/fa';
import { FurnitureContext } from '../../Context/FurnitureContext';

const ProductDetails = ({ productDetails }) => {  
  const {handleAddToCart,token,url} = useContext(FurnitureContext)
  const [mainImage, setMainImage] = useState(productDetails?.image || "");
  const [count,setCount] = useState(1)

  useEffect(() => {
    if (productDetails?.image) {
      setMainImage(productDetails.image);
    }
    
  }, [productDetails]);

  return (
    <>
      {productDetails ? (
        <div className='product-page-product-details'>
          <div className="product-page-product-details-left">
            <div className="product-page-product-details-all-images">
              {productDetails.additionalImages.map((img, index) => (
                <img 
                  key={index} 
                  src={`${url}images/${img}`} 
                  onClick={() => setMainImage(img)} 
                  alt={`Thumbnail ${index + 1}`} 
                />
              ))}
            </div>
            <div className="product-page-product-details-main-image">
              <img src={`${url}images/${mainImage}`} alt="Main Product" />
            </div>
          </div>
          <div className="product-page-product-details-right"> 
            <div className="product-page-product-details-container">
              <h1 className='product-page-name'>{productDetails.name}</h1>
              <p className='product-page-price'>Rs {productDetails.price}</p>
              <p className='product-page-rating'><span>Customer Ratings</span> : {productDetails.reviewCount}</p>
              <p className='product-page-description'>{productDetails.description}</p>
              <p className='product-page-size'>Size</p>
              <div className="product-details-size">
                <p>L</p>
                <p>XL</p>
                <p>XS</p>
              </div>
              <div className="product-categorys">
                <p><span>Category : </span>{productDetails.category}</p>
              </div>
              <div className="product-details-add-to-cart">
                <div className="addtocart-count">
                  <FaMinus className='addtocart-count-icon' onClick={() => setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1)} /> 
                  <p>{count}</p>
                  <FaPlus className='addtocart-count-icon' onClick={()=>setCount(count+1)}/>
                </div>
                <div className="addtocart-button">
                  <button onClick={() => handleAddToCart(productDetails._id,token)}>Add To Cart</button>
                </div>
              </div> 
              <div className="other-product-details">
                <p>Share :</p>
                <div className="social-media-share">
                  <FaFacebook style={{color:"blue"}} />
                  <FaLinkedin style={{color:"#000"}}/>
                  <FaTwitter style={{color:"#009deb"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetails;
