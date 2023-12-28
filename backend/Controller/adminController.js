const Cours = require("../Models/userSchema");
const cloudinary = require('cloudinary').v2;



exports.getAllCourses = async (req, res) => {
    try {
        const cours = await Cours.find().sort({ _id: -1 });
        res.status(200).json({
        cours
        });
    } catch (error) {
        res.status(500).json({
        errors: error
        });
    }
    };




exports.addCourse = async (req, res) => {
    try {
        const { name, price,image } = req.body;
        
          const rzlt = await cloudinary.uploader.upload(image, {
      folder: "Cours"
    });

        const newCourse = new Cours({
        name,
        price,
        image: rzlt.secure_url,
        });

        await newCourse.save();
        res.status(200).json({
        msg: "Course added successfully",
        newCourse,
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
        errors: error
        });
    }
    }

exports.updateCourse = async (req, res) => {
    try {
        const { name, price,image } = req.body;
        
        const rzlt = await cloudinary.uploader.upload(image, {
    folder: "Cours"
  });
        const cours = await Cours.findOneAndUpdate(
        { _id: req.params.id },
    
        { $set: { name, price, image: rzlt.secure_url } }
        );
        res.status(200).json({
        msg: "Course updated successfully",
        cours,
        });
    } catch (error) {
        res.status(500).json({
        errors: error
        });
    }
    }

exports.deleteCourse = async (req, res) => {
    try {
        const cours = await Cours.findByIdAndDelete(req.params.id);
        res.status(200).json({
        msg: "Course deleted successfully",
        cours,
        });
    } catch (error) {
        res.status(500).json({
        errors: error
        });
    }
    }

exports.getCourseById = async (req, res) => {
    try {
        const cours = await Cours.findOne({_id: req.params.id });
        res.status(200).json({
        msg: "Course fetched successfully",
        cours,
        });
    } catch (error) {
        res.status(500).json({
        errors: error
        });
    }
    }
