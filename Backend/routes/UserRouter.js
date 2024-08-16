const express = require("express");  
const { register, login, loginDetails } = require('../controllers/UserController');
const authMiddleWare = require("../middleware/auth");

const UserRouter = express.Router()

UserRouter.use(express.json());
UserRouter.use(express.urlencoded({ extended: true }))

UserRouter.post('/login' , login)

UserRouter.post('/register', register)

UserRouter.get('/details',authMiddleWare,loginDetails)

module.exports = { UserRouter };