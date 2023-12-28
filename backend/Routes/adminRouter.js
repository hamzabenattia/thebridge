const express = require("express");
const { getAllCourses, addCourse, updateCourse, deleteCourse, getCourseById } = require("../Controller/adminController");
const adminRouter = express.Router();



adminRouter.get("/cours/",getAllCourses);
adminRouter.post("/cours/",addCourse);
adminRouter.put("/cours/:id",updateCourse);
adminRouter.delete("/cours/:id",deleteCourse);
adminRouter.get("/cours/:id",getCourseById);











module.exports = adminRouter;