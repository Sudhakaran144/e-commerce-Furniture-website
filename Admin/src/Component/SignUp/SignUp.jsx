import React, { useState } from 'react'
import './SignUp.css'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const SignUp = ({setSignUp}) => {
    const[currShow,setCurrShow] = useState("Sign Up")
    const[data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const Url = "https://furniture-website-backend.onrender.com"

    const navigate = useNavigate()

    const OnChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev)=>({...prev,[name]:value}))
    }
    const Submit = async (e) => {
        e.preventDefault();
         
        let url = `${Url}userAdmin/user/`;
        if(currShow == "Login"){
            url = url + 'login'
        }
        else{
            url = url + 'register'
        }
        
        const response = await axios.post(url,data)
        console.log(response)

        if(response.data.Success){
            navigate("/add")
            toast.success("Login Successfully")
        }
        else{
            alert("error")
        }
        
    }
    console.log(data)
  return (
    <div className='SignUp'>
        <form onSubmit={Submit}>
            <div className="signup-header">
                <h2>{currShow}</h2>
                <img onClick={()=>setSignUp(false)} src={<RxCross2 />} alt="" />
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
                currShow === "Sign Up"?<p className='signup-account'>Already have an account? <span onClick={()=>{
                    setCurrShow("Login");
                    setData({
                        name:"",
                        email:"",
                        password:""
                    })
                }}>Login here</span></p>:
                                        <p className='signup-account'>Create a new account? <span onClick={()=>setCurrShow("Sign Up")}>Click here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default SignUp
