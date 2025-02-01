const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to the database")
    }
    catch(err){
        console.error("MongoDB connection string error",err);
        process.exit(1);
    }
};

module.exports = connectDB;