const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Name is required.']
    },
    productPrice: {
        type: String,
        // required: [true, 'Number is required.']
    },
    productType: {
        type: String,
        // required: [true, 'Service Type is required.']
    },
    poductImage: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const productModel = mongoose.model("Product", productScheme);

module.exports = productModel;
