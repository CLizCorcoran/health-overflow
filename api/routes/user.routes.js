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

  
  /* GET users listing. */
  //router.get('/', function (req, res, next) {
 //   res.send('respond with a resource');
 // });

  app.use("/api/user", router);

}
