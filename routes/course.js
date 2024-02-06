const express = require("express");
const { createCourse } = require("../controllers/course");
const router = express.Router();
router.post("/create",createCourse);
module.exports =  router
