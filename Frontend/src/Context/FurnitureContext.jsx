import React, { createContext, useEffect, useState } from 'react'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FurnitureContext = createContext(null);

const FurnitureContextProvider = ({ children }) => { 
    const [products, setProducts] = useState([]);
    const [count ,setCount] = useState(8);
    const [filterItem, setFilterItem] = useState("All")
    const [token,setToken] = useState()
    const [user,setUser] = useState(false)
    const [userData,setUserData] = useState()
    const [cartItem,setCartItem] = useState([])
    const [cart,setCart] = useState(false)
    const [cartTotalAmount,setCartTotalAmount] = useState(0);
    const [productDetails,setProductDetails] = useState()

    const url = "https://furniture-website-backend.onrender.com"

    const fetchData = async (e) => {
        try{
            const response = await axios.get(`${url}api/furniture/list`) 
            if(response.data.success){
                setProducts(response.data.data) 
            }
            else{
                console.log("Error")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const fetchUserDetails = async (token) => {
        try {
            if (token) {
                const response = await axios.get(`${url}user/details`, {headers: {token} }); 
                if (response.data.success) {
                    setUserData(response.data.data);
                } else {
                    console.log(response.data.message);
                }
            }
        } catch (error) {
            console.error('Failed to fetch user details', error);
        }
    };

    const handleAddToCart = async (itemId, token) => {
        try {
            if (token) {
                const response = await axios.post(`${url}cart/item/add`, { itemId }, { headers: { token } });
                if (response.data.Success) {
                    toast.success(response.data.message)
                    setCartItem(response.data.cartItem);
                } else {
                    console.log(response.data.message);
                }
            } else {
                toast.error("Please Login or Sign Up")
                console.log("Token is missing");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };
 
    const handleremoveProduct = async (itemId,token) => {
        console.log("View Product", itemId); 
        try {
            if (token) {
                const response = await axios.post(`${url}cart/item/remove`, { itemId }, { headers: { token } });
                if (response.data.Success) {
                    setCartItem(response.data.cartItem);
                    toast.success(response.data.message)
                } else {
                   
                    console.log(response.data.message);
                }
            } else {
                
                console.log("Token is missing");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    const handledeleteProduct = async (itemId,token) => { 
        try {
            if (token) {
                const response = await axios.post(`${url}cart/item/deleteItem`, { itemId }, { headers: { token } });
                 
                if (response.data.Success) {
                    setCartItem(response.data.cartItem);
                    toast.success(response.data.message)
                } else {
                    console.log(response.data.message);
                }
            } else {
                console.log("Token is missing");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    const listCartItem = async (token) => { 
        try{
            const response = await axios.get(`${url}cart/item/listitem`,{ headers: { token } });
           
            if(response.data.Success){ 
                setCartItem(response.data.cartItem); 
            }
            else{
                console.log("error")
            }
        }
        catch(error){
            console.log("Error",error)
        }
    }

    const handleViewProduct = async (id) => {
        try {
            const response = await axios.get(`${url}cart/item/list`, { params: { itemId: id } });
            console.log(response)
            if (response.data.Success) {
                setProductDetails(response.data.data) 
            }
        } catch (error) {
            console.log("Error fetching item:", error);
        }
    }

    useEffect(()=>{
        console.log(productDetails)
    },[productDetails])

    const calculateTotalAmount = async (cartItems) => {
        let total = 0;
    
        for (const item of Object.keys(cartItems)) {
            try {
                const response = await axios.get(`${url}cart/item/list`, { params: { itemId: item } });
                if (response.data.Success) {
                    total += (response.data.data.price * cartItems[item]); 
                }
            } catch (error) {
                console.log("Error fetching item:", error);
            }
        }
    
        setCartTotalAmount(total.toFixed(2));
    };
    
    
    useEffect(()=>{
        fetchData()      
    },[])

    useEffect(()=>{    
        fetchUserDetails(token)  
    },[token])
    

    useEffect(()=>{
        if(!token){
            setCartItem([])
        }
        else{
            listCartItem(token)
        }
    },[token])

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        console.log('Stored Token:', storedToken);  
        if (storedToken) {
            setToken(storedToken); 
            listCartItem(storedToken)
        }
   
    }, []);

    useEffect(()=>{
        calculateTotalAmount(cartItem)
    },[cartItem])

    
    const contextValue = {
        products,
        count,
        setCount,
        token,
        url,
        setToken,
        user,
        setUser,
        userData,
        setUserData,
        handleAddToCart,
        handleremoveProduct,
        cartItem,
        setCart,
        cart,
        cartTotalAmount,
        setCartTotalAmount,
        handledeleteProduct,
        handleViewProduct,
        productDetails
    };
    return (
        <FurnitureContext.Provider value={contextValue}>
            {children}
        </FurnitureContext.Provider>
    );
};

export default FurnitureContextProvider;
