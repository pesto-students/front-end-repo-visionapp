const express = require("express");
const { getAllPostsController, createPostController, updatePostController, getSinglePostByIDController, deletePostByIDController } = require("../controller/useController");
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
// *  POSTS APIs  *
// ================

//get method || GET
router.get('/all-posts', getAllPostsController)
//post method || POST
router.post('/create-post', upload.single("postUploadImage"), createPostController)
//update method || PUT
router.put('/update-post/:id', updatePostController)
//get method for fetch single detail || GET
router.get('/get-single-post/:id', getSinglePostByIDController)
//delete method || DELETE
router.delete('/delete-post/:id', deletePostByIDController)

module.exports = router;