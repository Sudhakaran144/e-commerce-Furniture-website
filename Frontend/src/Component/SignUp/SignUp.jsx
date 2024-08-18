import React, { useContext, useState } from 'react'
import './SignUp.css'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'; 
import { FurnitureContext } from '../../Context/FurnitureContext';


const SignUp = ({setSignUp}) => {
    const {setToken,setUser,setUserData,url} = useContext(FurnitureContext)
    const [currShow,setCurrShow] = useState("Sign Up")
    const [logout,setLogout] = useState(false)
    const[data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

  

    const OnChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev)=>({...prev,[name]:value}))
    }
     
    const islogin = async (e) => {
        e.preventDefault();
        let URL = `${url}user/`;
        if (currShow === "Login") {
            URL = URL + 'login';
        } else {
            URL = URL + 'register';
        }
    
        console.log('Sending request to:', URL);
        console.log('Request data:', data);
     
        try { 
            const response = await axios.post(URL, data);
            console.log(response);
            if (response.data.Success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setSignUp(false);
                setUserData(data)
            } else {
                console.log(response.data.message)
                
            }
        } catch (error) { 
            alert( error.response.data.message)
            console.error('Error response:', error.response);
        }
    }
    
  return (
    <div className='SignUp'>
    <form onSubmit={islogin}>
        <div className="signup-header">
            <h2>{currShow}</h2>
            <RxCross2 onClick={()=>setSignUp(false)}/>
             

        </div>
        <div className="signup-inputs">
            {currShow==="Sign Up"?<input type="text" name='name' onChange={OnChangeHandler} value={data.name} placeholder='Your name' className='name' required autoComplete='off' />:<></>}
            <input type="email" placeholder='Your email' name='email' onChange={OnChangeHandler} value={data.email} required autoComplete='off' />
            <input type="Password" placeholder='Your Password' name='password' onChange={OnChangeHandler} value={data.password} required autoComplete='off'   />
        </div>
        <div className="terms">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button type='submit'>{currShow === "Sign Up"?"Create account":"login"}</button>
        {
            currShow === "Sign Up"?
            <p className='signup-account'>Already have an account? <span onClick={()=>{
                setCurrShow("Login");
                setData({
                    name:"",
                    email:"",
                    password:""
                })
            }}>Login here</span></p>:
            <p className='signup-account'>Create a new account? <span onClick={()=>{
                setCurrShow("Sign Up")
                setData({
                    email:"",
                    password:""
                })
            }}>Click here</span></p>
        }
        
        
    </form>
</div>
  )
}

export default SignUp