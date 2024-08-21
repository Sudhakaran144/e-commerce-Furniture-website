import React, { useEffect, useState } from 'react'
import './List.css'
import img1 from "../../assets/upload_area.png" 
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [product,setProduct] = useState([]);

  const url = "https://furniture-website-backend.onrender.com"

  const fetchList = async () => {
    const response = await axios.get(`${url}api/furniture/list`)
    console.log(response)
    if(response.data.success){
      setProduct(response.data.data) 
      
    }
    else{
      console.log("error")
    }
  }

  const handleDelete = async (id) => {
    try{
      const response = await axios.post(`${url}api/furniture/remove`,{id:id})
      
      if(response.data.success){ 
        fetchList(); 
      }
      else{
        toast.error("Error") 
      }
      
    }
    catch(error){
      toast.error("Error")  
    }
  }
 
  useEffect(()=>{
    fetchList()
    console.log(product)
  },[])

  return (
    <div className='list'>
        <h2>All Products List</h2>
        <div className="product-list-title">
          <div className="pro_image_title">
            <h3>Image</h3>
          </div>
          <div className="pro_name_title">
            <h3>Name</h3>
          </div>
          <div className="pro_category_title">
            <h3>Category</h3>
          </div>
          <div className="pro_price_title">
            <h3>Price</h3>
          </div>
          <div className="pro_action_title">
            <h3>Action</h3>
          </div>
        </div>
        <div className="all-product-list">
          {
            product.map((item,i)=>{
              return (
                <div className="product-list " key={i}>
                  
                  <div className="pro_image">
                    <img src={`${url}images/`+item.image} alt="" />
                  </div>
                  <div className="pro_name">
                    <p>{item.name}</p>
                  </div>
                  <div className="pro_category">
                    <p>{item.category}</p>
                  </div>
                  <div className="pro_price">
                    <p>{item.price}</p>
                  </div>
                  <div className="pro_action">
                    <MdDelete className='delIcon' onClick={()=>handleDelete(item._id)} />
                    <FaEdit className='editIcon'  onClick={()=>handleEdit(item._id)}/>
                  </div> 
                </div>
              )
            })
          }
          
        </div>
    </div>
  )
}

export default List
