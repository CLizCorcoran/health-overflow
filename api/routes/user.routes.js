const passport = require("passport");

module.exports = app => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();


  // Handles register POST
  router.post('/register', users.create);

  
  // Login POST
  router.post('/login', users.login);

  
  /* GET users listing. */
  //router.get('/', function (req, res, next) {
 //   res.send('respond with a resource');
 // });

  app.use("/api/user", router);

}
