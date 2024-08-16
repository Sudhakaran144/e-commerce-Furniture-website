import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop'; 
import Contact from './Pages/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './Pages/Cart/Cart';
import CheckOut from './Pages/CheckOut/CheckOut';
import ProductPage from './Pages/ProductPage/ProductPage';
 
function App() {
     
   const[signUp,setSignUp] = useState(false)
   const [menu,setMenu] = useState("home")
    return (
        <div>
            {signUp && <SignUp setSignUp={setSignUp} />} 
            <BrowserRouter >
                <ToastContainer />
                <Navbar setSignUp={setSignUp} menu = {menu} setMenu = {setMenu}/>
                <Routes>
                    <Route path='/' element={<Home banner="Home" setMenu={setMenu} />} />
                    <Route path='/shop' element={<Shop banner="Shop" setMenu={setMenu}/>} /> 
                    <Route path='/contact' element={<Contact banner="Contact"/>} />
                    <Route path ='/cart' element = {<Cart banner="Cart" />} />
                    <Route path ='/checkout' element = {<CheckOut banner="checkout" />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                </Routes>
            </BrowserRouter>
       
            
        </div>
    );
}

export default App;
