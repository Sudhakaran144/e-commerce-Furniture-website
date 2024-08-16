import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Component/SignUp/SignUp'

const App = () => {
  const [signup ,setsignUp] = useState(true);
  return (
    <BrowserRouter >
      <ToastContainer />
        <div className='admin-app'> 
          <Routes>
            <Route path='/' element = {<SignUp setSignUp={setsignUp}/>}></Route>
          </Routes>
          <Navbar />
          <div className="app-content">
            <div className="admin-left">
            < Sidebar />
            </div>
            <div className="admin-right">
              <Routes >
                <Route path='/add' element={<Add />}></Route>
                <Route path ='/list' element={<List />}></Route> 
              </Routes> 
            </div>
          </div>
        </div> 
    </BrowserRouter>
  )
}

export default App