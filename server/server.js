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

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//router imports
const postsRoutes = require('./routes/postRoutes')


//mongoDB connection
connectDB();

//ROUTES
app.use('/api/v1/post', postsRoutes);

//PORT
const PORT = process.env.PORT || 8080;
//LISTEN PORT
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
    //npm run server - command to run with nodemon
});
