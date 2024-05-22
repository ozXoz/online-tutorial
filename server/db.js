const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
        mongoose.connect("mongodb+srv://101345468:votzeC-wowxar-hibme1@final-project.i71p7ty.mongodb.net/?retryWrites=true&w=majority", connectionParams,
        () => {
            console.log("DB CONNECTED")
           // console.log('\n\t***Connected to database*** \n', connection);
        })
       
 }