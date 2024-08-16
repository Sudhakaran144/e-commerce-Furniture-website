import React, { useContext } from 'react'
import './HPdisplay.css'
import { FurnitureContext } from '../../Context/FurnitureContext'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const HPdisplay = ({display,setMenu}) => {
    const {products} = useContext(FurnitureContext)

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [display])
  return (
    <div>
      {
        products.length == 0 ? (
          <div>
            Loading
          </div>
        ): (
          <div>
          {
            display === "Home" ? (
              <div className='hpdisplay'>
                <div className='hpdisplayContainer'>
                  {
                    products.slice(0, 8).map((item) => (   
                                <Product
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    category={item.category}
                                    actualPrice={item.actualPrice}
                                    discountprice={item.discountPrice}
                                    discountPercentage={item.discountPercentage}
                                    image={item.image}
                                />
                            ))
                  }
                </div>
                <div className="hpShowButton">
                    <Link onClick={()=>setMenu("shop")} className='hpbtn' to = '/shop'>Show More</Link> 
                </div>
              </div>
            ):(
              <div className='hpdisplay'>
                <div className='hpdisplayContainer'>
                  {
                    products.map((item) => (
                                <Product
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    category={item.category}
                                    actualPrice={item.actualPrice}
                                    discountprice={item.discountPrice}
                                    discountPercentage={item.discountPercentage}
                                    image={item.image}
                                />
                            ))
                  }
                </div>
                <div className="hpShowButton">
                    <button className='hpbtn'>Show More</button> 
                </div>
              </div>
            )
          }
          </div>
        )
      }
      
    </div>
  )
}

export default HPdisplay