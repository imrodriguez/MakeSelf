var express = require('express');
var User = require('../models/user').User;

var router = express.Router();

router.get("/",(req,res)=>{
    res.redirect("dashboard/home");
});

router.get("/home",(req,res)=>{
  res.render("pages/dashboard/home",{
    title : "Home",
    content: "",
    username: req.session.user
  });
});

router.get("/campaigns",(req,res)=>{
  var campaigns = [{name: "Campaña1",description: "gasd"},{name: "Campaña2",description: "dafsdf"}]
  res.render("pages/dashboard/campaigns",{
    title: "Campaigns",
    content: campaigns,
    username: req.session.user
  });
});

router.get("/user",(req,res)=>{
  res.render("pages/dashboard/userinfo",{
    title: "User information",
    content: "",
    username: req.session.user
  });
});

router.get("/logout",(req,res)=>{
  req.session.user = "";
  req.session.user_id = "";
  res.redirect("/dashboard");
});

router.get("/editor",(req,res)=>{
  res.render("pages/editor/index.ejs");
});

router.get("/editor/:size",(req,res)=>{
  res.render("pages/editor/editor.ejs",{
    tamaño: req.params.size
  });
});

module.exports = router;
