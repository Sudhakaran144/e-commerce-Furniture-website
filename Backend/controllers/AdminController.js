const express = require('express')
const AdminUserModel = require('../models/AdminUserModel')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const createToken = (id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ id }, process.env.JWT_SECRET,{ expiresIn: '2h' });
}

const register =  async (req,res) => {
    const {name,email,password} = req.body;
    console.log("aaa",req.body);
    
    try{
        if (!email || !password || !name) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }
        const exist = await AdminUserModel.findOne({email});
        if(exist){
            return res.status(400).json({Success : false, message : "Email Already Exist"})
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({Success : false, message : "Invalid email"})
        }

        if(password.length < 8){
            return res.status(400).json({Success : false, message : "Enter the Strong password"})
        }

        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = new AdminUserModel ({
            name,
            email,
            password:hashPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);

        res.status(201).json({Success:true,token}) 
    }
    catch (error){
        console.error(error);
        res.status(500).json({ Success: false, message: "Error " });
    }
}

const login = async (req,res) => {
    const {email,password} = req.body;
    try{
        const user = await AdminUserModel.findOne({email})
        if(!user){
            return res.json({Success : false, message : "User does not Exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({Success : false, message : "Password is Incorrect"})
        }

        const token = createToken(user._id)
        res.status(201).json({Success:true,token}) 
    }
    catch (error){
        console.error(error);
        res.status(500).json({ Success: false, message: "Error " });
    }
}

module.exports = {register, login}