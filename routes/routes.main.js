var express = require('express');
var User = require('../models/user').User;

var router = express.Router();

router.get("/",(req,res)=>{
  if (req.session.user) {
    res.render("pages/index", {
      sesion : "yes",
      username : req.session.user
    });
  } else {
    res.render("pages/index", {
      sesion : "no",
    });
  }
});

router.get("/login", (req,res)=>{
  res.render("pages/login");
});

router.get("/signup", (req,res)=>{
  res.render("pages/signup");
});

router.post("/newuser", (req,res)=>{
  var user = new User({name: req.body.name, user: req.body.user, password: req.body.password, email: req.body.mail});

  user.save().then((us)=>{
    res.redirect("/");
  },(err)=>{
    if (err) {
      console.log(String(err));
      res.send("No se pudo guardar la información");
    }
  });
});

router.post("/signin", (req,res)=>{
  User.findOne({user: req.body.user,password: req.body.password},(err,user)=>{
    req.session.user_id = user._id;
    res.redirect("/dashboard");
  });
});

module.exports = router;
