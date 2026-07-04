const { Router } = require("express");
const adminRouter = Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { adminModel, courseModel } = require('../db');
const adminMiddleware = require('../middleware/admin');

adminRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const User = z.object({
    email: z.email(),
    pass: z.string().min(5).max(30),
    firstName: z.string().min(5).max(30),
    lastName: z.string().min(5).max(30),
  });

  try {
    const safe = User.safeParse({
      email: `${email}`,
      pass: `${pass}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    });

    if (safe.success) {
      const hashedPass = await bcrypt.hash(pass, 5);

      await adminModel.insertOne({
        email: email,
        pass: hashedPass,
        firstName: firstName,
        lastName: lastName,
      });

      return res.status(200).json({
        message: "admin created successfully!",
      });
    } else {
      return res.status(500).json({
        message: "values not safe to parse!!!",
        error: safe.errror.issue,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error in DB!",
    });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  try {
    const foundUser = await adminModel.findOne({
      email: email
    });

    const verifyPass = await bcrypt.compare(pass, foundUser.pass);

    if (verifyPass) {
      const token = jwt.sign(
        {
          id: foundUser._id,
        },
        process.env.JWT_ADMIN_SECRET,
      );

      return res.status(200).json({
        message: "admin logged in successfully!",
        token: token,
      });
    } else {
      return res.status(401).json({
        message: "Pass incorrect or admin DNE!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error in fetching from DB!",
    });
  }
});

// this router lets an admin upload a course
adminRouter.post('/course', adminMiddleware , async (req,res)=>{
  const adminId = req.id;

  const { title, description, price, imageUrl } = req.body;
  
  try {
    const course = await courseModel.insertOne({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    });
  } catch (error) {
    return res.status(401).json({
      message:"error in the DB insertion!"
    })
  }

})

adminRouter.put('course', (req,res)=>{

})

adminRouter.get("course/bulk", (req, res) => {});

module.exports = adminRouter;


// const courseSchema = new Schema({
//   title: String,
//   description: String,
//   price: String,
//   imageUrl: String,
//   creatorId: ObjectId,
// });
