const mongoose = require("mongoose");

const providerScheme = new mongoose.Schema({
    providerName: {
        type: String,
        required: [true, 'Name is required.']
    },
    providerNumber: {
        type: String,
        // required: [true, 'Number is required.']
    },
    providerServiceType: {
        type: String,
        // required: [true, 'Service Type is required.']
    },
    providerLocation: {
        type: String,
        // required: [true, 'Service Type is required.']
    },
    providerImage: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const providerModel = mongoose.model("Provider", providerScheme);

module.exports = providerModel;
