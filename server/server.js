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

//GET METHOD
// app.get("/", async (req, res) => {
//     const showItem = await Post.find();
//     res.status(201).json(showItem);
//     res.send("GET method is running...")
// })

// //POST METHOD
// app.post("/", async (req, res) => {
//     const { item } = req.body;
//     const addItem = await Post.create({
//         item: item
//     });
//     res.status(201).json(addItem);
// })

// //DELETE METHOD
// app.delete("/:id", async (req, res) => {
//     const { id } = req.params;
//     const deletedID = await Post.deleteOne({ _id: id });
//     res.send(201).json(deletedID)
// });

// //UPDATE METHOD
// app.patch("/:id", async (req, res) => {
//     const { id } = req.params;
//     const updateID = await Post.updateOne(id, req.body );
//     res.send(201).json(updateID)
// })


