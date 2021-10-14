// Server-side: app.js
const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
//const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const sessionStore = new MySQLStore(dbconfig);
const con = mysql.createConnection(dbconfig);
const port = process.env.PORT || 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

app.use(
  session({
    secret: "keboard cat",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

router.get("/api", (req, res) => {
  res.send({ test: "hi" });
});

module.exports = router;

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

app.get("/", (req, res) => {
  console.log("get /");
});

app.post("/", (req, res) => {
  console.log("post /");
});

app.post("/Signin", (req, res) => {
  console.log("Post Signin");
  console.log(req.body);
  console.log(req.session);
  const name = req.body.name;
  const email = req.body.email;
  const sql = "SELECT * FROM users WHERE name=?";
  console.log(name + "\n");
  console.log(email + "\n");
  console.log(sql + "\n");

  con.query(sql, [name, email], (err, results) => {
    console.log("User info is: ", results);
    if (err) throw err;
    if (!results[0]) return res.send("please check your name");
    const user = results[0];
    if (user.email != email) return res.send("please check your email");
    else {
      req.session.id = user.id;
      req.session.name = user.name;
      req.session.isLogined = true;
      req.session.save(function () {
        return res.render("Signout", { id: req.session.id });
        //return res.send("login success");
      });
    }
  });
});

app.post("/Signout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => console.log("Example app listening on port" + port));
