import React, { useEffect, useState } from 'react';
import './Add.css';
import upload_area from '../../assets/upload_area.png';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [mainImage, setMainImage] = useState(null);
    const [AddiImages, setAddiImages] = useState([null, null, null, null]);
    const [data, setData] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        actualPrice: "",
        discountPrice: "",
        discountPercentage:"",
        availability: "",
        reviewCount: "",
        star: ""
    });

    const addImages = (e, index) => {
        const file = e.target.files[0];
        setAddiImages((prevAddiImages) => {
            const newImages = [...prevAddiImages];
            newImages[index] = file;
            console.log(newImages)
            return newImages;
        });
    };

    useEffect(()=>{
        console.log(data)
        console.log(AddiImages)
    },[data])

    const addDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data)=>({
            ...data,
            [name]:value
        }))
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("category",data.category);
        formData.append("description",data.description);
        formData.append("price",data.price);
        formData.append("actualPrice",data.actualPrice);
        formData.append("discountPrice",data.discountPrice);
        formData.append("discountPercentage",data.discountPercentage);
        formData.append("availability",data.availability);
        formData.append("image",mainImage); 
        formData.append("reviewCount",data.reviewCount);
        formData.append("star",data.star);

        AddiImages.forEach((image, index) => {
            if(image) {
                formData.append('additionalImages', image);
            }
        });

        try{
            const response = await axios.post("http://localhost:4000/api/furniture/add",formData);

            console.log(response)

            if(response.data.success){
                setData({
                    name: "",
                    category: "",
                    description: "",
                    price: "",
                    actualPrice: "",
                    discountPrice: "",
                    discountPercentage:"",
                    availability: "",
                    reviewCount: "",
                    star: ""
                })
                setAddiImages([null, null, null, null]);
                setMainImage(false);
                toast.success(response.data.message)
            }
        }
        catch(error){
            console.log("Error",error)
        }
    }

    return (
        <div className='add'>
            <form className='add-item' onSubmit={handleSubmit} >
                <div className="uploads-image">
                    <div className="M_image v-gap">
                        <h4>Main Image</h4>
                        <label htmlFor='main-image' className="furniture-image">
                            <img src={mainImage ? URL.createObjectURL(mainImage) : upload_area} alt="" />
                        </label>
                        <input onChange={(e) => setMainImage(e.target.files[0])} id='main-image' type="file" hidden required />
                    </div>
                    <div className="multiImage">
                        <h4>Other Images <span>(Upload Main Image also) </span></h4>
                        <div className="multiple-Images">
                            <div className="m-images" >
                                <label htmlFor="image-1" className='furniture-image'>
                                    <img src={AddiImages[0] ? URL.createObjectURL(AddiImages[0]) : upload_area} alt="" />
                                </label>
                                <input onChange={(e) => addImages(e, 0)} id="image-1" type="file" hidden required />
                            </div>
                           
                            <div className="m-images" >
                                <label htmlFor="image-2" className='furniture-image'>
                                    <img src={AddiImages[1] ? URL.createObjectURL(AddiImages[1]) : upload_area} alt="" />
                                </label>
                                <input onChange={(e) => addImages(e, 1)} id="image-2" type="file" hidden required />
                            </div>
                            <div className="m-images" >
                                <label htmlFor="image-3" className='furniture-image'>
                                    <img src={AddiImages[2] ? URL.createObjectURL(AddiImages[2]) : upload_area} alt="" />
                                </label>
                                <input onChange={(e) => addImages(e, 2)} id="image-3" type="file" hidden required />
                            </div>
                            <div className="m-images" >
                                <label htmlFor="image-4" className='furniture-image'>
                                    <img src={AddiImages[3] ? URL.createObjectURL(AddiImages[3]) : upload_area} alt="" />
                                </label>
                                <input onChange={(e) => addImages(e, 3)} id="image-4" type="file" hidden required />
                            </div>
                                    
                        </div>
                    </div>
                </div>
                <div className="product-name-category">
                    <div className="product-name v-gap">
                        <h4>Name</h4>
                        <input type="text" placeholder='Enter the Product Name' name='name' value={data.name} onChange={addDetails} className='p-name p-details' required autoComplete='off' />
                    </div>
                    <div className="product-category v-gap">
                        <h4>Category</h4>
                        <input type="text" placeholder='Enter the Product Category' name='category' value={data.category} onChange={addDetails} className='p-category p-details' required autoComplete='off' />
                    </div>
                </div>
                <div className="product-description v-gap">
                    <h4>Description</h4>
                    <textarea name="description" value={data.description} onChange={addDetails} rows={6} className='p-description' required autoComplete='off'></textarea>
                </div>
                <div className="price-grid">
                    <div className="product-price v-gap">
                        <h4>Price</h4>
                        <input type="Number" placeholder=' ' name='price' value={data.price} onChange={addDetails} className='p-price' required />
                    </div>
                    <div className="product-Actual-price v-gap">
                        <h4>Actual price</h4>
                        <input type="Number" placeholder=' ' name='actualPrice' value={data.actualPrice} onChange={addDetails} className='p-price' required />
                    </div>
                    <div className="product-dicount-price v-gap">
                        <h4>Discount price</h4>
                        <input type="Number" placeholder=' ' name='discountPrice' value={data.discountPrice} onChange={addDetails} className='p-price' required />
                    </div>
                    <div className="product-dicount-percentage v-gap">
                        <h4>Discount percentage</h4>
                        <input type="Number" placeholder=' ' name='discountPercentage' value={data.discountPercentage} onChange={addDetails} className='p-price' required />
                    </div>
                </div>
                <div className="product-review-rating">
                    <div className="product-availability v-gap">
                        <h4>Availability</h4>
                        <input type="text" placeholder=' ' name='availability' value={data.availability} onChange={addDetails} className='p-details' required autoComplete='off' />
                    </div>
                    <div className="product-reviewCount v-gap">
                        <h4>Review Count</h4>
                        <input type="Number" placeholder=' ' name='reviewCount' value={data.reviewCount} onChange={addDetails} className='p-price' required />
                    </div>
                    <div className="product-reviewCount v-gap">
                        <h4>Rating</h4>
                        <input type="Number" placeholder=' ' name='star' value={data.star} onChange={addDetails} className='p-price' required />
                    </div>
                </div>

                <button className="btn" type="submit" >Add item</button>
            </form>
        </div>
    )
}

export default Add;
