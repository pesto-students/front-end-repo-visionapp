const express = require("express");
const { doCheckout, doPaymentVerification } = require("../controller/useController");

//router object
const router = express.Router();

// ================
// *  RAZORPAY APIs  *
// ================

//post method || POST
router.post('/checkout', doCheckout)
//post method || POST
router.post('/payment-verification', doPaymentVerification)


module.exports = router;