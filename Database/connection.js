const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DataBase Connected SucessFully !!!!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;