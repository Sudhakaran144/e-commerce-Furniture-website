const express = require('express')
const { register,login } = require('../controllers/AdminController')

const AdminRouter = express.Router();

AdminRouter.use(express.json());
AdminRouter.use(express.urlencoded({extended:true}));
 
AdminRouter.post('/register', register)

AdminRouter.post('/login', login)

module.exports = {AdminRouter}