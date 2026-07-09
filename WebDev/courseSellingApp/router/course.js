const { Router } = require('express');
const { courseModel } = require('../db');

const courseRouter = Router();

courseRouter.get('/', async (req,res)=>{
    const data = await courseModel.find({})
    
    return res.status(200).json({
        data:data
    })
})

courseRouter.get("/:id", async (req, res) => {
    const id = req.params.id

    const data = await courseModel.findById(id);
    
    return res.status(200).json({
      data: data,
    });
});



module.exports = courseRouter;