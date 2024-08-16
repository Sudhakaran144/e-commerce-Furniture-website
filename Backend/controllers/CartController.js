const userModel = require('../models/UserModel');
const furnitureModel = require('../models/FurModel')

const addItem = async (req, res) => {
    const { itemId, userId } = req.body;
    console.log(req.body);

    try {
        if (!userId || !itemId) {
            return res.status(400).json({ Success: false, message: "Missing userId or itemId" });
        }

        const userdata = await userModel.findOne({ _id: userId });
        if (!userdata) {
            return res.status(404).json({ Success: false, message: "User does not exist" });
        }

        let cartItem = userdata.cartItem || {};

        cartItem[itemId] = (cartItem[itemId] || 0) + 1;

        const updateUser = await userModel.findByIdAndUpdate(userId, { cartItem }, { new: true });
        console.log(updateUser);

        if (!updateUser) {
            return res.status(500).json({ Success: false, message: "Failed to update cart" });
        }

        res.json({ Success: true, message: "Added to cart", cartItem: updateUser.cartItem });
    } catch (error) {
        console.log("Error in addItem:", error);
        res.status(500).json({ Success: false, message: "An error occurred" });
    }
};

const getItem = async (req, res) => {
    const { itemId, userId } = req.body;
    console.log(req.body);

    try {
        const user = await userModel.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        let cartItem = user.cartItem || {};

        if (cartItem[itemId] > 0) {
            cartItem[itemId] -= 1;

            if (cartItem[itemId] === 0) {
                delete cartItem[itemId];
            }

            const updateUser = await userModel.findByIdAndUpdate(userId, { cartItem }, { new: true });
            console.log(updateUser);

            if (!updateUser) {
                return res.status(500).json({ Success: false, message: "Failed to update cart" });
            }

            res.json({ Success: true, message: "Removed from cart", cartItem: updateUser.cartItem });
        } else {
            res.status(400).json({ Success: false, message: "Item not found in cart" });
        }
    } catch (error) {
        console.log("Error in getItem:", error);
        res.status(500).json({ Success: false, message: "An error occurred" });
    }
};

const listItem = async (req, res) => {
    const { itemId } = req.query;
    console.log(req.query);
    try {
        const item = await furnitureModel.findOne({ _id: itemId });
        if (!item) {
            return res.status(404).json({ success: false, message: "Item does not exist" });
        }
        res.json({ Success: true, message: "Item in cart", data: item });
    } catch (error) {
        console.log("Error in ListItem:", error);
        res.status(500).json({ Success: false, message: "An error occurred" });
    }
};


const listCartItem = async (req,res) => {
    const { userId} = req.body;
    console.log(req.body);
    try{
        const user = await userModel.findOne({_id : userId})
        if(!user){
            return res.status(404).json({ success: false, message: "item does not exist" });
        }
        res.json({Success:true,message:"Item in cart",cartItem:user.cartItem})
    }
    catch(error){
        console.log("Error in ListItem:", error);
        res.status(500).json({ Success: false, message: "An error occurred" });
    }
}

const deleteItem = async (req,res) => {
    const { itemId, userId } = req.body;
    console.log(req.body);
    try{
        const user = await userModel.findById({_id:userId})
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        let cartItem = user.cartItem;
        if(cartItem){
            delete cartItem[itemId];
            const updateUser = await userModel.findByIdAndUpdate(userId, { cartItem }, { new: true })
            console.log(updateUser);
            if (!updateUser) {
                return res.status(500).json({ Success: false, message: "Failed to update cart" });
            }

            res.json({ Success: true, message: "Removed from cart", cartItem: updateUser.cartItem });
        } 
        else {
            res.status(400).json({ Success: false, message: "Item not found in cart" });
        }
    }
    catch (error){
        console.log("Error in getItem:", error);
        res.status(500).json({ Success: false, message: "An error occurred" });
    }
}

module.exports = { addItem, getItem , listItem, listCartItem, deleteItem};
