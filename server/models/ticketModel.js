const mongoose = require("mongoose");

const ticketScheme = new mongoose.Schema({
    ticketTitle: {
        type: String,
        required: [true, 'Title is required.']
    },
    ticketType: {
        type: String,
        // required: [true, 'Number is required.']
    },
    dateOfRaisedTicket: {
        type: String,
        // required: [true, 'Service Type is required.']
    },
    ticketDescription: {
        type: String,
        // required: [true, 'Service Type is required.']
    },
    phoneNumberOfUser: {
        type: String,
    },
    ticketIssueProofImage: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const ticketModel = mongoose.model("Ticket", ticketScheme);

module.exports = ticketModel;
