var express = require('express');
var User = require('../models/schemas').User;
var Campaigns = require('../models/schemas').Campaign;
var path = require('path');
const uploadDir = path.join(__dirname + '/../public/uploads/');
var router = express.Router();

router.get("/",(req,res)=>{
    res.redirect("/dashboard/home");
});

router.get("/home",(req,res)=>{
  res.render("pages/dashboard/home",{
    title : "Home",
    content: "",
    username: req.session.user
  });
});

router.get("/campaigns",(req,res)=>{
  Campaigns.find({user: req.session.user_id},(err,campaigns)=>{
    res.render("pages/dashboard/campaigns",{
      title: "Campaigns",
      content: campaigns,
      username: req.session.user
    });
  });
});

router.get("/campaign/:id",(req,res)=>{
  Campaigns.findOne({_id: req.params.id},(err,camp)=>{
    res.render("pages/campaigns/campaign",{
      campaign: camp,
      username: req.session.user
    });
  })
});

router.post("/newcampaign",(req,res)=>{
  var campaign = new Campaigns({name: req.body.name,user: req.session.user_id,description: req.body.description});

  campaign.save().then((us)=>{
    res.redirect("/dashboard/campaigns");
  },(err)=>{
    if (err) {
      console.log(String(err));
      res.send("No se pudo guardar la información");
    }
  });
});

router.get("/deletecampaign/:id",(req,res)=>{
  Campaigns.deleteOne({ _id: req.params.id }, (err)=> {

  });
  res.redirect("/dashboard/campaigns");
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
  var docw = parseInt(docsplit[0], 10);
  var doch = parseInt(docsplit[1], 10);;
  res.render("pages/editor/editor.ejs",{
    w: docw,
    h: doch
  });
});

router.get("/upload",(req,res)=>{
  res.render("pages/dashboard/upload");
  console.log(uploadDir);
});

router.post("/uploadfile",(req,res)=>{
  var sampleFile = req.files.sampleFile;

  sampleFile.mv(uploadDir + req.files.sampleFile.name, function(err) {
  //   if(err){
  //     return res.status(500).send(err);
  //   }
  //   res.send('File uploaded!');
  });

  console.log(req.files.sampleFile.name);
  res.redirect("/dashboard/upload");
});

module.exports = router;
