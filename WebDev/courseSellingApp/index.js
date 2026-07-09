const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');
const adminRouter = require('./router/admin')

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/user', userRouter );
app.use('/api/v1/admin', adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_SECRET);
    console.log('connected to DB!');

    app.listen(3000, () => {
    console.log("Port running on 3k");
    });
}

main();