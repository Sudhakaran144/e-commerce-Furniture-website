const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs')
const validator = require('validator')
 

const createToken = (id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ id }, process.env.JWT_SECRET );
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ Success: false, message: "User does not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ Success: false, message: "Password is Incorrect" });
        }

        const token = createToken(user._id);
        res.json({ Success: true, token });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ Success: false, message: "Error" });
    }
};

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ Success: false, message: "Missing required field" });
        }

        const exist = await UserModel.findOne({ email });
        if (exist) {
            return res.status(400).json({ Success: false, message: "Email is already registered" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ Success: false, message: "Invalid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ Success: false, message: "Enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({ name, email, password: hashpassword });
        const user = await newUser.save();
        const token = createToken(user._id);

        res.status(201).json({ Success: true, token });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ Success: false, message: "Error" });
    }
};

const loginDetails = async (req, res) => {
    const { userId } = req.body;
    try {
        if (!userId) {
            return res.json({ success: false, message: "Missing userId" });
        }
        const data = await UserModel.findById(userId).select('-password');
        if (!data) {
            return res.json({ success: false, message: "User not found" });
        }
        res.json({ success: true, data });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "An error occurred" });
    }
};

module.exports = { login, register, loginDetails };
