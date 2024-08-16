const mongoose = require('mongoose');

const FurSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    actualPrice: { type: Number },
    discountPrice: { type: Number },
    discountPercentage: { type: Number },
    availability: { type: Boolean },
    image: { type: String, required: true }, 
    additionalImages:{type:[String],validate:[arrayLimit, '{PATH} exceeds the limit of 4']},
    reviewCount: { type: Number, required: true },
    star: { type: Number, required: true },
});

function arrayLimit(val){
    return val.length <= 4;
}

module.exports = mongoose.model('Furniture', FurSchema);
