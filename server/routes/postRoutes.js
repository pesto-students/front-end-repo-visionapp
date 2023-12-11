const express = require("express");
const { getAllPostsController,
    createPostController,
    updatePostController,
    getSinglePostByIDController,
    deletePostByIDController } = require("../controller/useController");

//router object
const router = express.Router();

//get method || GET
router.get('/all-posts', getAllPostsController)

//post method || POST
router.post('/create-post', createPostController)

//update method || PUT
router.put('/update-post/:id', updatePostController)

//get method for fetch single detail || GET
router.get('/get-single-post/:id', getSinglePostByIDController)

//delete method || DELETE
router.delete('/delete-post/:id', deletePostByIDController)

module.exports = router;