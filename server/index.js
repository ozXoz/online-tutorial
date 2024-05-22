
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const connectDB = require("./db");
require('dotenv').config()
const tutorRoutes = require("./routes/tutorRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes")
const profileRoutes = require("./routes/profileRoutes")
const blogPostRoutes = require("./routes/blogPostRoutes.js")
const PORT = process.env.PORT || 4000;
const http = require("http").Server(app);


const socketIO = require('socket.io')(http, {
    cors: {
        origin: "https://t26-server.herokuapp.com"
    }
});





// middlewares
app.use(express.json());
app.use(cors());


//solving cors issue
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Credentials: true") 
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    // res.header("Access-Control-Max-Age", "1000")
    if (req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next()
})
// Routes
app.use("/api/tutor", tutorRoutes);
app.use("/api", authRoutes);
app.use("/api/user", userRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/blogpost", blogPostRoutes);;

app.get('/',(req, res)=>{
    res.send('it is working')
   })


// const connectToMongo = async() => {
 mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true       
},() => console.log('connected yeee'));




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});