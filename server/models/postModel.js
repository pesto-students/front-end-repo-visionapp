const mongoose = require("mongoose");

const postScheme = new mongoose.Schema({
    postDescription: {
        type: String,
        required: [true, 'Description is required.']
    },
    postUploadImage: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const postModel = mongoose.model("Post", postScheme);

module.exports = postModel;
