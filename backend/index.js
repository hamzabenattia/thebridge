const express  = require("express");
const dotenv = require("dotenv");
const DBConnection = require("./config/DBConnection");
const adminRouter = require("./Routes/adminRouter");
const app = express();
const cloudinary = require('cloudinary').v2;

const  cors = require('cors')
const morgan = require('morgan')
dotenv.config();



  cloudinary.config({
    cloud_name: process.env.Cloudinary_Name,
    api_key: process.env.Cloudinary_Key,
    api_secret: process.env.Cloudinary_Secret,
  });
  


dotenv.config();
app.use(express.json());
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin:'http://localhost:5173', 
    credentials:true,          
}))



// API
app.use("/api/admin",adminRouter);







const port = process.env.PORT || 1000;
app.listen(port, ()=>{
console.log(`Server connected on port ${port}`)
DBConnection();

});