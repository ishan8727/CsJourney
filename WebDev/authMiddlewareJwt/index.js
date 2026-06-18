const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];
JWT_SECRET = "IamAnoobDev";

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/index.html')
})

app.post("/signup", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;

  users.push({
    id: id,
    pass: pass,
  });

  res.json({
    message: "successfully created a user!",
  });
});

app.post("/signin", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;

  const foundUser = users.find((u) => {
    return u.id == id && u.pass == pass;
  });

  if (foundUser) {
    isloggedin = true;
    foundUser.isloggedin = isloggedin;

    const token = jwt.sign(
      {
        id: id,
      },
      JWT_SECRET,
    );

    foundUser.token = token;

    res.json({
      token: token,
    });
  } else {
    res.json({
      error: "wrong creds or no user!",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded.id) {
    req.headers.user = decoded.id;
    next();
  } else {
    res.json({
      error: "you are not logged in!",
    });
  }
}

app.get("/me", auth, (req, res) => {
  const user = req.headers.user;
  let foundUser;

  for (let i = 0; i < users.length; i++) {
    if (user == users[i].id) {
      foundUser = users[i];
    }
  }

  res.json({
    id: foundUser.id,
    pass: foundUser.pass,
    Date: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3k");
});
