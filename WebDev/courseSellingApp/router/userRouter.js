const express = require('express');

const userRouter = express.Router();

userRouter.post('/signup',(req,res)=>{
    res.json({
        message:"hi there!"
    })
})

userRouter.post('/signin', (req,res)=>{

})

userRouter.get('/purchases', (req,res)=>{

})

module.exports = userRouter;