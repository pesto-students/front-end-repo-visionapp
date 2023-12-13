const express = require("express");
const { getAllPostsController,
    createPostController,
    updatePostController,
    getSinglePostByIDController,
    deletePostByIDController } = require("../controller/useController");
const multer = require("multer");

//Image storage path
const imgConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});
//Image filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("Only image is allow."));
    }
}
//Set Above 2 Functions in Below One.
const upload = multer({
    storage: imgConfig,
    fileFilter: isImage
})

//router object
const router = express.Router();

//get method || GET
router.get('/all-posts', getAllPostsController)

//post method || POST
router.post('/create-post', upload.single("photo"), createPostController)

//update method || PUT
router.put('/update-post/:id', updatePostController)

//get method for fetch single detail || GET
router.get('/get-single-post/:id', getSinglePostByIDController)

//delete method || DELETE
router.delete('/delete-post/:id', deletePostByIDController)

module.exports = router;