const express = require("express");
//rest object
const app = express();

const dotenv = require("dotenv");
//configure .env file
dotenv.config();
//if .env file in other folder
// dotenv.config({path:'./envFolder'});

const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');

//middlewares
app.use(cors());
// app.use(express.json());
app.use(morgan('dev'));
//Image upload
app.use('/uploads', express.static('uploads'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//router imports
const postsRoutes = require('./routes/postRoutes');
const providersRoutes = require('./routes/providerRoutes');
const productRoute = require('./routes/productRoute');
const ticketRoute = require('./routes/ticketRoutes');
const razorpayRoute = require('./routes/razorpayRoutes');


//mongoDB connection
connectDB();

//ROUTES
app.use('/api/v1/post', postsRoutes);
app.use('/api/v1/provider', providersRoutes);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/ticket', ticketRoute);
app.use('/api/v1/razorpay', razorpayRoute);

//PORT
const PORT = process.env.PORT || 8080;
//LISTEN PORT
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
    //npm run server - command to run with nodemon
});
