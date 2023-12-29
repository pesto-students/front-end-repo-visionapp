const mongoose = require("mongoose");

const razorpayScheme = new mongoose.Schema({
    razorpayOrderID: {
        type: String,
        required: [true]
    },
    razorpayPaymentID: {
        type: String,
        required: [true]
    },
    razorpaySignature: {
        type: String,
        required: [true]
    },
}, { timestamps: true });

const razorpayModel = mongoose.model("Razorpay", razorpayScheme);

module.exports = razorpayModel;
