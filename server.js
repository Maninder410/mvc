const express = require("express");
const dbUrl = require("./config/db.config");
const  mongoose  = require("mongoose");
const app = express();
const router = require("./routes/course.js");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.listen(4000,()=>{
    console.log("server is running ");
})

mongoose.connect(dbUrl.url).then((e)=>{
    console.log(`database connected to ${e.connection.host}`);
})


app.get("/",(req,res)=>{
    res.send("welcome to express server ");
})