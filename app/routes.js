module.exports = function(app, passport) {

  // RUTAS APLICACIÓN

  app.get('/', function(req, res) {
    res.render('pages/index.ejs');
  });

  app.get('/login', function(req, res) {
    res.render('pages/login.ejs', { message: req.flash('loginMessage') });
  });

  app.get('/signup', function(req, res) {
    res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
  });

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
};


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
  return next();
  res.redirect('/');
}
