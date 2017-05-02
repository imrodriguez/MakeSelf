var express = require('express');
var User = require('../models/user').User;
//var Campaign = require('../models/campaign').Campaign;

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

router.post("/newcampaign",(req,res)=>{
  var campaign = new Campaign({name: req.body.name});

  campaign.save().then((us)=>{
    console.log("se ha guardado");
    res.redirect("dashboard/campaigns");
  },(err)=>{
    if (err) {
      console.log(String(err));
      res.send("No se pudo guardar la información");
    }
  });
});

router.post("/newcampaign",(req,res)=>{
  var campaigns = [{name: "Campaña1",description: "gasd"},{name: "Campaña2",description: "dafsdf"}]

});

router.get("/user",(req,res)=>{
  User.findOne({_id: req.session.user_id},(err,user)=>{
    res.render("pages/dashboard/userinfo",{
      title: "User information",
      content: "",
      username: user.user,
      name: user.name,
      email: user.email
    });
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
  var docsplit = req.params.size.split("x");
  var docw = docsplit[0];
  var doch = docsplit[1];
  res.render("pages/editor/editor.ejs",{
    w: docw,
    h: doch
  });
});

module.exports = router;
