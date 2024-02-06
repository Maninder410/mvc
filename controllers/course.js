const courses = require("../model/courses");

const createCourse = async (req,res)=>{
const {course_name,course_price ,instructors} = req.body;
    const course = await courses.create({course_name,course_price,instructors});
  return  res.status(200).json({
        message:"course created",
        course
    })

}
module.exports = {createCourse};