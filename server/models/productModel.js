const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Name is required.']
    },
    productPrice: {
        type: Number,
        // required: [true, 'Number is required.']
    },
    productType: {
        type: String,
        // required: [true, 'Service Type is required.']
    },
    productImage: {
        type: String,
        // required: true
    },
    productQuantity: {
        type: Number
    }
}, { timestamps: true });

productScheme.path('productQuantity')
    .default(1)

const productModel = mongoose.model("Product", productScheme);

module.exports = productModel;
