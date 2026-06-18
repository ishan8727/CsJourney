const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];
const JWT_SECRET = "abc123xyz";

app.post("/signup", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;

  users.push({
    id: id,
    pass: pass,
  });

  res.json({
    message: "Congrats you have signed up!",
  });
});

function genrateToken(id) {
  return jwt.sign(
    {
      id: id,
    },
    JWT_SECRET,
  );
}

function checkUser(id, pass) {
  return users.find((u) => {
    return u.id === id && u.pass === pass;
  });
}

app.post("/signin", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;

  const userFound = checkUser(id, pass);

  if (userFound) {
    const token = genrateToken(id);
    userFound.token = token;

    res.json({
      token: token,
    });
  } else {
    res.json({
      error: "wrong id pass combination or none exists!",
    });
  }
});

function checkToken(token) {
  return users.find((u) => u.token == token);
}

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const user = jwt.verify(token, JWT_SECRET);

  if (user) {
    res.json({
      id: user.id,
    });
  } else {
    res.json({
      error: "user invalid",
    });
  }
});

app.listen(3000);
