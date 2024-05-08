const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {PythonShell} =  require("python-shell")
app.use(express.json());
const cors = require("cors");
app.use(cors());

//mongodb connection
const mongoUrl =
  "mongodb+srv://swapnilsindhur:swapnilsindhur85@cluster0.vetgbr0.mongodb.net/Images";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

//importing schema
require("./imageDetails");
const Images = mongoose.model("ImageDetails");




//////////////////////////////////////////////////////////////

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image/circle", upload.single("image"), async (req, res) => {
  console.log("Inside post req of circle");
  const imageName = req.file.filename;
  try {
    const image = await Images.create({ image: imageName });
    // console.log(image.image);
    let options = {
        scriptPath : "/media/swapnil/New Volume/final/backend",
        args:[`./uploads/${image.image}`]
    }
    const message = await PythonShell.run('circle_ml.py', options)
    // console.log(message[2]);
    // console.log(message[3]);
    
    res.json({msg1:message[2],msg2:message[3]})
    
  } catch (error) {
    res.json({ status: error });
  }
});


app.post("/upload-image/square", upload.single("image"), async (req, res) => {
  console.log("Inside post req of square");
  const imageName = req.file.filename;
  try {
    const image = await Images.create({ image: imageName });
    // console.log(image.image);
    let options = {
        scriptPath : "/media/swapnil/New Volume/final/backend",
        args:[`./uploads/${image.image}`]
    }
    const message = await PythonShell.run('square_ml.py', options)
    // console.log(message[2]);
    // console.log(message[3]);
    
    res.json({msg1:message[2],msg2:message[3]})
    
  } catch (error) {
    res.json({ status: error });
  }
});


app.post("/upload-image/triangle", upload.single("image"), async (req, res) => {
  console.log("Inside post req of triangle");
  const imageName = req.file.filename;
  try {
    const image = await Images.create({ image: imageName });
    // console.log(image.image);
    let options = {
        scriptPath : "/media/swapnil/New Volume/final/backend",
        args:[`./uploads/${image.image}`]
    }
    const message = await PythonShell.run('triangle_ml.py', options)
    // console.log(message[2]);
    // console.log(message[3]);
    
    res.json({msg1:message[2],msg2:message[3]})
    
  } catch (error) {
    res.json({ status: error });
  }
});



app.listen(3000, () => {
    console.log("Server Started");
  });
