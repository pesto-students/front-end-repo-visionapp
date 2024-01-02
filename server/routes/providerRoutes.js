const express = require("express");
const { getAllProvidersController, addProviderController, updateProviderController, getSingleProviderByIDController, deleteProviderByIDController } = require("../controller/useController");
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
// *  PROVIDER APIs  *
// ================

//get method || GET
router.get('/all-providers', getAllProvidersController)
//post method || POST
router.post('/add-provider', upload.single("providerImage"), addProviderController)
//update method || PUT
router.put('/update-provider/:id', updateProviderController)
//get method for fetch single detail || GET
router.get('/get-single-provider/:id', getSingleProviderByIDController)
//delete method || DELETE
router.delete('/delete-provider/:id', deleteProviderByIDController)


module.exports = router;