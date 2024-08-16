const express = require("express")
const userModel = require('../models/UserModel');
const authMiddleWare = require("../middleware/auth");
const { addItem, getItem, listItem, listCartItem, deleteItem } = require("../controllers/CartController");

const cartRouter = express.Router();
cartRouter.use(express.json())
cartRouter.use(express.urlencoded({extended:true}))

cartRouter.post('/add',authMiddleWare,addItem);

cartRouter.post('/remove',authMiddleWare,getItem);

cartRouter.post('/deleteItem',authMiddleWare,deleteItem)

cartRouter.get('/listitem',authMiddleWare,listCartItem)

cartRouter.get('/list',listItem)

module.exports = { cartRouter }
