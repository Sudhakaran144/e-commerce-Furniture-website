const FurModel = require("../models/FurModel");
const fs = require("fs").promises;

const addFurniture = async (req, res) => {
    try {
        const { category, name, description, price, actualPrice, discountPrice, discountPercentage, reviewCount, star } = req.body;

        // Log the files and body for debugging
        console.log("Files: ", req.files);
        console.log("Body: ", req.body);

        if (!req.files || !req.files['image'] || !req.files['image'][0]) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const image = req.files['image'][0].filename;
        const additionalImages = req.files['additionalImages'] ? req.files['additionalImages'].map(file => file.filename) : [];

        // Check for required fields
        if (!category || !name || !description || !price || !reviewCount || !star) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const furniture = new FurModel({
            category,
            name,
            description,
            price,
            actualPrice,
            discountPrice,
            discountPercentage,
            image,
            additionalImages,
            reviewCount,
            star
        });

        await furniture.save();
        res.json({ success: true, message: "Furniture added successfully" });
    } catch (error) {
        console.error("Error occurred while adding furniture: ", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const listFurniture = async (req, res) => {
    try {
        const furniture = await FurModel.find({});
        res.json({ success: true, data: furniture });
    } catch (error) {
        console.error("Error occurred while listing furniture: ", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const removeFurniture = async (req, res) => {
    try {
        console.log("Request body: ", req.body);
        const furniture = await FurModel.findById(req.body.id);

        if (!furniture) {
            return res.status(404).json({ success: false, message: "Furniture item not found" });
        }

        await fs.unlink(`uploads/${furniture.image}`); 
        
        if (Array.isArray(furniture.additionalImages)) {
            for (const image of furniture.additionalImages) {
                await fs.unlink(`uploads/${image}`);
                console.log(`Deleted additional image: uploads/${image}`);
            }
        } else if (furniture.additionalImages) {
            // Handle case where additionalImages is a single string
            await fs.unlink(`uploads/${furniture.additionalImages}`);
            console.log(`Deleted additional image: uploads/${furniture.additionalImages}`);
        }

        await FurModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Furniture item deleted successfully" });
    } catch (error) {
        console.error("Error occurred while removing furniture: ", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = { addFurniture, removeFurniture, listFurniture };
