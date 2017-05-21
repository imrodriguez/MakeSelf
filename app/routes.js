module.exports = function(app, passport) {
  var Campaign = require('../app/models/campaign');

  // RUTAS APLICACIÓN

  app.get('/', function(req, res) {
    if (req.isAuthenticated()){
      res.redirect('/dashboard');
    } else {
      res.render('pages/index.ejs');
    }
  });

  app.get('/login', function(req, res) {
    if (req.isAuthenticated()){
      res.redirect('/dashboard');
    } else {
      res.render('pages/login.ejs', { message: req.flash('loginMessage') });
    }
  });

  app.get('/signup', function(req, res) {
    if (req.isAuthenticated()){
      res.redirect('/dashboard');
    } else {
      res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
    }
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/dashboard',
    failureRedirect : '/signup',
    failureFlash : true
  }));

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/dashboard',
    failureRedirect : '/login',
    failureFlash : true
  }));

  // DASHBOARD

  app.get('/dashboard', isLoggedIn, function(req, res) {
    res.render('pages/dashboard/home.ejs', {
      user : req.user
    });
  });

  app.get('/dashboard/user', isLoggedIn, function(req, res) {
    res.render('pages/dashboard/userinfo.ejs', {
      user : req.user
    });
  });

  // CAMPAIGNS

  app.get('/dashboard/campaigns', isLoggedIn, function(req, res) {
    Campaign.find({user: req.user._id},(err,campaigns)=>{
      res.render('pages/dashboard/campaigns.ejs', {
        user : req.user,
        campaigns : campaigns
      });
    });
  });

  app.get('/dashboard/campaign/:id', isLoggedIn, function(req, res) {
    Campaign.findOne({_id: req.params.id},(err,campaign)=>{
      if (campaign.user == req.user._id) {
        res.render('pages/campaigns/campaign.ejs', {
          user : req.user,
          campaign : campaign
        });
      } else {
        res.render('pages/campaigns/campaign.ejs', {
          user : req.user,
          campaign : "No tienes permisos para acceder a esta campaña"
        });
      }
    });
  });

  app.post('/dashboard/campaign/:id/newdesign', isLoggedIn, function(req, res) {
    Campaign.findOne({ _id: req.params.id }, function (err, cmp){
      cmp.designs.push({name: req.body.name , description: req.body.description});
      cmp.save();
    });
    res.redirect('/dashboard/campaign/'+req.params.id);
  });

  app.get("/dashboard/deletecampaign/:id",isLoggedIn,(req,res)=>{
    Campaign.findOne({_id: req.params.id},(err,campaign)=>{
      if (campaign.user == req.user._id) {
        Campaign.deleteOne({ _id: req.params.id }, (err)=> {
        });
      }
    });
    res.redirect("/dashboard/campaigns");
  });

  app.post('/dashboard/newcampaign', isLoggedIn, function(req, res) {
    var campaign = new Campaign({title: req.body.name,user: req.user._id,description: req.body.description});
    campaign.save().then((us)=>{
      res.redirect("/dashboard/campaigns");
    },(err)=>{
      if (err) {
        console.log(String(err));
        res.send("No se pudo guardar la información");
      }
    });
  });

  // EDITOR
  app.get('/dashboard/editor', isLoggedIn, function(req, res) {
    res.render('pages/editor/index.ejs', {
      user : req.user
    });
  });

  app.get('/dashboard/editor/:size', isLoggedIn, function(req, res) {
    res.render('pages/editor/editor.ejs', {
      user : req.user,
      h: 600,
      w: 800
    });
  });
};


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
  return next();
  res.redirect('/');
}
