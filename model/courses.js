const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    course_name:{
        type:String,
        require:true
    },
    course_price:{
        type:Number,
        require:true
    },
    instructors:{
        type:Array,
        require:true,
    },


})
const courses = mongoose.model("courses",courseSchema);
module.exports = courses;