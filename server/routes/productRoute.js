const express = require("express");
const { getAllProductsController, addProductController, updateProductController, getSingleProductByIDController, deleteProductByIDController } = require("../controller/useController");
const multer = require('multer');

// Image storage path
const storage = multer.diskStorage({
    // destination: (req, file, callback) => {
    //     callback(null, "./uploads")
    // },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});

//set above 1 Function in Below One.
const upload = multer({
    storage: storage,
});

//router object
const router = express.Router();

// ================
// *  PRODUCT APIs  *
// ================

//get method || GET
router.get('/all-products', getAllProductsController)
//post method || POST
router.post('/add-product', upload.single("productImage"), addProductController)
//update method || PUT
router.put('/update-product/:id', updateProductController)
//get method for fetch single detail || GET
router.get('/get-single-product/:id', getSingleProductByIDController)
//delete method || DELETE
router.delete('/delete-product/:id', deleteProductByIDController)


module.exports = router;