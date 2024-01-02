const postModel = require("../models/postModel");
const productModel = require("../models/productModel");
const providerModel = require("../models/providerModel");
const ticketModel = require("../models/ticketModel");
const cloudinary = require("../helper/cloudinaryConfig");
const Razorpay = require("razorpay");
const crypto = require("crypto")
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
})

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
        // const postUploadImage = req.file.path;
        const upload = await cloudinary.uploader.upload(req.file.path);
        const postUploadImage = upload.secure_url;
        // console.log("#Cloudinary_FILE", postUploadImage);
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
        // const providerImage = req.file.path;
        const upload = await cloudinary.uploader.upload(req.file.path);
        const providerImage = upload.secure_url;
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

// =============================
// *  PRODUCTS APIs CONTROLLER  *
// =============================
//get all products
exports.getAllProductsController = async (req, res) => {
    try {
        const allProductsDetails = await productModel.find({});
        return res.status(200).send({
            userCount: allProductsDetails.length,
            success: true,
            message: "All Products details are here.",
            allProductsDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Get Products Callback",
            success: false,
            error
        })
    }
}
//add product
exports.addProductController = async (req, res) => {
    console.log("Image Path", req.file.path);
    try {
        const productName = req.body.productName;
        const productPrice = req.body.productPrice;
        const productType = req.body.productType;
        // const productImage = req.file.path;
        const upload = await cloudinary.uploader.upload(req.file.path);
        const productImage = upload.secure_url;
        // Validation --- if(!productName || !productPrice)
        if (!productName) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            })
        }
        // Save new user
        const productDetails = new productModel({ productName, productPrice, productType, productImage });
        await productDetails.save();
        return res.status(201).send({
            success: true,
            message: 'New Product Details Added Successfully.',
            productDetails
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Add Product Callback",
            success: false,
            error

        })
    }
}
//update the product
exports.updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productPrice, productType, poductImage } = req.body;
        // Save new user
        const productDetails = await productModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
        await productDetails.save();
        return res.status(201).send({
            success: true,
            message: 'Product Details are updated Successfully.',
            productDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Update Product Callback",
            success: false,
            error
        })
    }
}
//get the single product
exports.getSingleProductByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const singleProductDetail = await productModel.findById(id);
        //Validation
        if (!singleProductDetail) {
            return res.status(404).send({
                success: false,
                message: 'Product is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Single Product details are here.",
            singleProductDetail
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Product Callback",
            success: false,
            error
        })
    }
}
//delete the provider
exports.deleteProductByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProductDetails = await productModel.findByIdAndDelete(id);
        //Validation
        if (!deleteProductDetails) {
            return res.status(404).send({
                success: false,
                message: 'Product is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Product is successfully deleted with this ID.",
            deleteProductDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Product Callback",
            success: false,
            error
        })
    }
}

// =============================
// *  TICKETS APIs CONTROLLER  *
// =============================
//get all tickets
exports.getAllTicketsController = async (req, res) => {
    try {
        const allTicketsDetails = await ticketModel.find({});
        return res.status(200).send({
            userCount: allTicketsDetails.length,
            success: true,
            message: "All Ticket details are here.",
            allTicketsDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Get Tickets Callback",
            success: false,
            error
        })
    }
}
//add ticket
exports.addTicketController = async (req, res) => {
    console.log("Image Path", req.file.path);
    try {
        const ticketTitle = req.body.ticketTitle;
        const ticketType = req.body.ticketType;
        const dateOfRaisedTicket = req.body.dateOfRaisedTicket;
        const ticketDescription = req.body.ticketDescription;
        const phoneNumberOfUser = req.body.phoneNumberOfUser;
        // const ticketIssueProofImage = req.file.path;
        const upload = await cloudinary.uploader.upload(req.file.path);
        const ticketIssueProofImage = upload.secure_url;
        // Validation --- if(!productName || !ticketType)
        if (!ticketTitle) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            })
        }
        // Save new user
        const ticketDetails = new ticketModel({ ticketTitle, ticketType, dateOfRaisedTicket, ticketDescription, phoneNumberOfUser, ticketIssueProofImage });
        await ticketDetails.save();
        return res.status(201).send({
            success: true,
            message: 'New Ticket Details Added Successfully.',
            ticketDetails
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Add Ticket Callback",
            success: false,
            error

        })
    }
}
//update the ticket
exports.updateTicketController = async (req, res) => {
    try {
        const { id } = req.params;
        const { ticketTitle, ticketType, dateOfRaisedTicket, ticketDescription, phoneNumberOfUser, ticketIssueProofImage } = req.body;
        // Save new user
        const ticketDetails = await ticketModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
        await ticketDetails.save();
        return res.status(201).send({
            success: true,
            message: 'Ticket Details are updated Successfully.',
            ticketDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Update Ticket Callback",
            success: false,
            error
        })
    }
}
//get the single ticket
exports.getSingleTicketByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const singleTicketDetail = await ticketModel.findById(id);
        //Validation
        if (!singleTicketDetail) {
            return res.status(404).send({
                success: false,
                message: 'Ticket is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Single Ticket details are here.",
            singleTicketDetail
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Ticket Callback",
            success: false,
            error
        })
    }
}
//delete the ticket
exports.deleteTicketByIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTicketDetails = await ticketModel.findByIdAndDelete(id);
        //Validation
        if (!deleteTicketDetails) {
            return res.status(404).send({
                success: false,
                message: 'Ticket is not available with this ID.'
            })
        }
        return res.status(200).send({
            success: true,
            message: "Ticket is successfully deleted with this ID.",
            deleteTicketDetails
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Single Get Ticket Callback",
            success: false,
            error
        })
    }
}

// =============================
// *  RAZORPAY APIs CONTROLLER  *
// =============================

//doCheckout
exports.doCheckout = async (req, res) => {
    const options = {
        amount: Number(req.body.totalPrice * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);

    res.status(200).json({
        success: true, order
    })
}

exports.doPaymentVerification = async (req, res) => {
    const { razorpayOrderID, razorpayPaymentID, razorpaySignature } = req.body;
    const body = razorpayOrderID + "|" + razorpayPaymentID;
    const expectedsignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY).update(body.toString()).digest('hex')
    const isauth = expectedsignature === razorpaySignature;
    if (isauth) {
        await Payment.create({
            razorpayOrderID, razorpayPaymentID, razorpaySignature
        })
        res.redirect(`http://localhost:3000/paymentSuccess?reference=${razorpayPaymentID}`)
    }
    else {
        res.status(400).json({ success: false });
    }
}
