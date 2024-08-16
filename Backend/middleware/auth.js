const jwt = require('jsonwebtoken');

const authMiddleWare = async (req, res, next) => {
    const {token} = req.headers;
    console.log(token)

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized.Login Again" });
    }

    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

module.exports = authMiddleWare;
