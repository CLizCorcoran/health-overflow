var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user.routes');
var testAPIRouter = require('./routes/testAPI');

var app = express();
var passport = require('passport');
var session = require('express-session');

// Module to handle environment variables
//var env = require('dotenv').load();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//var corsOptions = {
//  origin: "http://localhost:9001"
//};

app.use(cors());
app.use(logger('dev'));
// REMEMBER - body parser is deprecated.  
//  Using express.json is the new way to go.  
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Set up Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));  // session secret
app.use(passport.initialize());
app.use(passport.session());  // persistent login sessions

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
require('./routes/question.routes')(app);
require('./routes/user.routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Sync health database
const db = require("./models");
db.questions.hasMany(db.comments, { as: "comments"});
db.comments.belongsTo(db.questions, {
  foreignKey: "questionId",
  as: "question"
});

db.sequelize.sync();
// In development, you may need to drop existing tables and re-sync database.
//  This is done by setting force: true
//db.sequelize.sync({ force: true }).then(() => {
// console.log("Drop and re-sync db.");
//});

module.exports = app;
