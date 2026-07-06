const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userModel, purchaseModel } = require("../db");
const userMiddleware = require("../middleware/user");
const userRouter = express.Router();

require("dotenv").config();

userRouter.post("/signup", async (req, res) => {
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

      await userModel.insertOne({
        email: email,
        pass: hashedPass,
        firstName: firstName,
        lastName: lastName,
      });

      return res.status(200).json({
        message: "user created successfully!",
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

userRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  try {
    const foundUser = await userModel.findOne({
      email: email
    });

    const verifyPass = await bcrypt.compare(pass, foundUser.pass);

    if (verifyPass) {
      const token = jwt.sign(
        {
          id: foundUser._id,
        },
        process.env.JWT_USER_SECRET,
      );

      return res.status(200).json({
        message: "user logged in successfully!",
        token: token,
      });
    } else {
      return res.status(401).json({
        message: "Pass incorrect or user DNE!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error in fetching from DB!",
    });
  }
});

userRouter.get("/purchases", userMiddleware , async (req, res) => {
  const userId = req.id;
  const courseId = req.headers.courseid;
  

  try {
    await purchaseModel.insertOne({
    userId: userId,
    courseId: courseId
  })

  return res.status(200).json({
    success:"Course bought successfully!"
  })
  } catch (error) {
    res.status(500).json({
      error:"error in DB transaction! your money is gone heheheh!"
    })
  }
});

module.exports = userRouter;


// const purchaseSchema = new Schema({
//     userId: ObjectId,
//     course: ObjectId
// });
