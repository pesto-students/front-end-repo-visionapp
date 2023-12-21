const postModel = require("../models/postModel");
const providerModel = require("../models/providerModel");

// =============================
// *  PROSTS APIs CONTROLLER  *
// =============================
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
    try {
        const postDescription = req.body.postDescription;
        const postUploadImage = req.file.path;
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

// =============================
// *  PROVIDER APIs CONTROLLER  *
// =============================
//get all providers
exports.getAllProvidersController = async (req, res) => {
    try {
        const allProvidersDetails = await providerModel.find({});
        return res.status(200).send({
            userCount: allProvidersDetails.length,
            success: true,
            message: "All Providers details are here.",
            allProvidersDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Get Providers Callback",
            success: false,
            error
        })
    }
}
//add provider
exports.addProviderController = async (req, res) => {
    console.log("Image Path", req.file.path);
    try {
        const providerName = req.body.providerName;
        const providerNumber = req.body.providerNumber;
        const providerServiceType = req.body.providerServiceType;
        const providerLocation = req.body.providerLocation;
        const providerImage = req.file.path;
        // Validation --- if(!providerName || !providerNumber)
        if (!providerName) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            })
        }
        // Save new user
        const providerDetails = new providerModel({ providerName, providerNumber, providerServiceType, providerLocation, providerImage });
        await providerDetails.save();
        return res.status(201).send({
            success: true,
            message: 'New Provider Details Added Successfully.',
            providerDetails
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Add Provider Callback",
            success: false,
            error

        })
    }
}
//update the provider
exports.updateProviderController = async (req, res) => {
    try {
        const { id } = req.params;
        const { providerName, providerNumber, providerServiceType, providerLocation, providerImage } = req.body;
        // Save new user
        const providerDetails = await providerModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
        await providerDetails.save();
        return res.status(201).send({
            success: true,
            message: 'Provider Details are updated Successfully.',
            providerDetails
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
//get the single provider
exports.getSingleProviderByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const singleProviderDetail = await providerModel.findById(id);
        //Validation
        if (!singleProviderDetail) {
            return res.status(404).send({
                success: false,
                message: 'Provider is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Single Provider details are here.",
            singleProviderDetail
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Provider Callback",
            success: false,
            error
        })
    }
}
//delete the provider
exports.deleteProviderByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProviderDetails = await providerModel.findByIdAndDelete(id);
        //Validation
        if (!deleteProviderDetails) {
            return res.status(404).send({
                success: false,
                message: 'Provider is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Provider is successfully deleted with this ID.",
            deleteProviderDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Provider Callback",
            success: false,
            error
        })
    }
}
