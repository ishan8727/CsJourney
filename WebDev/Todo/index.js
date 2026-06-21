const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } = require('./db');

const app = express();
app.use(express.json());

JWT_SECRET = 'iamishanchaudhary'

mongoose.connect(
  "mongodb+srv://insan00008_db_user:Sjj7KhJ6MaVFkYV2@cluster0.6nnp8zq.mongodb.net/to-do-database",
);

app.post('/signup', async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;

    await UserModel.insertOne({
      name: name,
      email: email,
      pass: pass,
    });

    res.json({
        message:"user created successfully!"
    })
})

app.post("/signin", async(req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    const response = await UserModel.findOne({
        email: email,
        pass: pass
    })

    if(response){
        const token = jwt.sign({
            id : response._id.toString() 
        }, JWT_SECRET);

        res.json({
            token: token,
            message: 'logged in successfully!'
            })
        }
    else{
        res.status(403).json({
            error:"incorrect credentails!"
        });
    }
});

// auth middleware

function auth(req, res, next){
    const token = req.headers.authorization;
    
    const response = jwt.verify(token, JWT_SECRET);

    if(response){
        req.id = response.id;
        next();
    }else{
        res.status(403).json({
            error:"invalid user!!!!"
        })
    }
}

app.post("/todo", auth, async (req, res) => {
    const title = req.body.title;

    const id = req.id;

    const response = await TodoModel.insertOne({
        userId: id,
        title: title,
        done: false
    })

    res.status(200).json({
        message:"todo created successfully!"
    })
});


app.get("/todo", auth, async (req, res) => {
    const id = req.id;

    const response = await TodoModel.find({
        userId: id
    })

    res.json({
        todo: response
    });

});

app.patch('/todo', auth, async (req,res)=>{
    const id = req.id;
    // remembet todoId to send in req object
    const todoId = req.body.todoId;
    const done = req.body.done;

    await TodoModel.updateOne({
        userId: id,
        _id: todoId
    },{
       $set:{ done: done }
    })

    res.status(200).json({
        message:"updated todo!"
    })

})

app.delete('/todo', auth, async (req,res)=>{
    const id = req.id;
    const todoId = req.body.todoId;

    await TodoModel.deleteOne({
      userId: id,
      _id: todoId
    });

    res.status(200).json({
        alert:"Deleted todo!"
    })
})

app.listen(3000,()=>{
    console.log('port runnng on 3k');
})