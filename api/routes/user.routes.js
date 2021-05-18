const passport = require("passport");
const { verifySignUp } = require("../middleware");

module.exports = app => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();


  // Route Registration Requests
  router.post('/register', 
              [ verifySignUp ],
              users.create);

  
  // Routes Login Requests
  router.post('/login', users.login);


  router.get('/profile', 
              passport.authenticate('jwt', { session: false}),
              (req,res, next) => {
                res.json({
                  message: 'You made it to the secure route',
                  user: req.user,
                  token: req.query.secret_token
                })
              }
            );

  
  /* GET users listing. */
  //router.get('/', function (req, res, next) {
 //   res.send('respond with a resource');
 // });

  app.use("/api/user", router);

}
