require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const ConnectDB = require('./config/db');
const { furRouter } = require('./routes/furRouter');
const { AdminRouter } = require('./routes/AdminUserRouter');
const { UserRouter } = require('./routes/UserRouter');
const { cartRouter } = require('./routes/cartRouter');



const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000;

ConnectDB();

app.use('/api/furniture',furRouter)

app.use('/images',express.static("uploads"))

app.use('/userAdmin/user', AdminRouter)

app.use('/user' , UserRouter)

app.use('/cart/item', cartRouter)

app.get('/' , (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log("Server is running on " + port)
})