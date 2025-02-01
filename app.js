require("dotenv").config
const connectDB = require("./config/db")
const serviceRoutes = require("./routes/serviceRoutes")

const express = require("express")
const app = express()


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(express.static("public"));

connectDB();

app.use('/',serviceRoutes)


app.use(express.static("public"))
app.listen(PORT,()=>{console.log("app is listening in port 3000")})