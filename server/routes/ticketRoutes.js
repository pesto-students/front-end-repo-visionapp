const express = require("express");
const { getAllTicketsController, addTicketController, updateTicketController, getSingleTicketByIDController, deleteTicketByIDController } = require("../controller/useController");
const multer = require('multer');

// Image storage path
const storage = multer.diskStorage({
    // destination: (req, file, callback) => {
    //     callback(null, "./uploads")
    // },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});

//set above 1 Function in Below One.
const upload = multer({
    storage: storage,
});

//router object
const router = express.Router();

// ================
// *  TICKET APIs  *
// ================

//get method || GET
router.get('/all-tickets', getAllTicketsController)
//post method || POST
router.post('/add-ticket', upload.single("ticketIssueProofImage"), addTicketController)
//update method || PUT
router.put('/update-ticket/:id', updateTicketController)
//get method for fetch single detail || GET
router.get('/get-single-ticket/:id', getSingleTicketByIDController)
//delete method || DELETE
router.delete('/delete-ticket/:id', deleteTicketByIDController)


module.exports = router;