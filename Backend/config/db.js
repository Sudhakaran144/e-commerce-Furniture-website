const mongoose = require('mongoose')

const ConnectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/Furniture")
    .then(()=>{console.log("DataBase is Connected")})
}
module.exports = ConnectDB