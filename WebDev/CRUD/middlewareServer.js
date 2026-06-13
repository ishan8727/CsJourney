const express = require("express");

const app = express();

function middleware(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(new Date().toISOString());
  next();
}

let counter = 0;

function request_counter(req,res,next) {
  counter++;
  next();
}

app.get("/sum", request_counter, middleware, (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  res.json({
    result: a + b,
  });
});

app.get("/mul", request_counter, middleware, (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  res.json({
    result: a * b,
  });
});

app.get("/admin", middleware, (req, res) => {
  res.json({
    number_of_requests: counter,
  });
});

app.listen(3030);
