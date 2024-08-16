const express = require('express');
const multer = require('multer');
const { addFurniture, removeFurniture, listFurniture } = require('../controllers/furController');

const furRouter = express.Router();

furRouter.use(express.json());
furRouter.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

furRouter.post('/add', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'additionalImages', maxCount: 4 }
]), addFurniture);

furRouter.get('/list', listFurniture);

furRouter.post('/remove', removeFurniture);

module.exports = { furRouter };
