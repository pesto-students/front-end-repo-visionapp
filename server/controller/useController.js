const postModel = require("../models/postModel")


//get all posts
exports.getAllPostsController = async (req, res) => {
    try {
        const allPostDetails = await postModel.find({});
        return res.status(200).send({
            userCount: allPostDetails.length,
            success: true,
            message: "All Posts details are here.",
            allPostDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Get Posts Callback",
            success: false,
            error
        })
    }
}

//create the post
exports.createPostController = async (req, res) => {
    console.log("#uploadImage", req.file);
    try {
        const { postDescription, postUploadImage } = req.body;
        // Validation --- if(!postDescription || !email)
        if (!postDescription) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            })
        }
        // Save new user
        const postDetail = new postModel({ postDescription, postUploadImage });
        await postDetail.save();
        return res.status(201).send({
            success: true,
            message: 'New Post Details Added Successfully.',
            postDetail
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Create Post Callback",
            success: false,
            error
        })
    }
}

//update the post
exports.updatePostController = async (req, res) => {
    try {
        const { id } = req.params;
        const { postDescription } = req.body;
        // Save new user
        const postDetail = await postModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
        await postDetail.save();
        return res.status(201).send({
            success: true,
            message: 'Post Details are updated Successfully.',
            postDetail
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Update Post Callback",
            success: false,
            error
        })
    }
}

//get the single post
exports.getSinglePostByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const singlePostDetails = await postModel.findById(id);
        //Validation
        if (!singlePostDetails) {
            return res.status(404).send({
                success: false,
                message: 'Post is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Single Post details are here.",
            singlePostDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Post Callback",
            success: false,
            error
        })
    }
}

//delete the post
exports.deletePostByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletePostDetails = await postModel.findByIdAndDelete(id);
        //Validation
        if (!deletePostDetails) {
            return res.status(404).send({
                success: false,
                message: 'Post is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Post is successfully deleted with this ID.",
            deletePostDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Post Callback",
            success: false,
            error
        })
    }
}
