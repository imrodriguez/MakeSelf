var User = require('../models/schemas').User;
var session = require("express-session");

module.exports = (req,res,next)=>{
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    User.findById(req.session.user_id,(err,user)=>{
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        req.session.user = user.user;
        next();
      }
    });
  }
}
