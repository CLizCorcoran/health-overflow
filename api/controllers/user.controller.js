const db = require("../models");
const User = db.user;
var crypto = require('crypto');
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');


//----------------------------------------------------------------
// Sets up passport to use LocalStrategy.  Provides basic
//  authentication login.  
//----------------------------------------------------------------
passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },

    async function (username, password, done) {
        var user = await User.findOne({ where: { username: username } });

        if (user == null) {
        return done(null, false, { message: 'Incorrect username.' });
        }

        if (!user.verifyPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    }
));


//----------------------------------------------------------------
// This code uses passport-jtw to extract the JWT from the query parameter.  
//  It then verifies that this token has been signed with the secret or key
//  set during logging in (TOP_SECRET).  If the token is valid, the user 
//  details are passed to the next middleware.  
//----------------------------------------------------------------
passport.use(
    'jwt',
    new JWTstrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);


//----------------------------------------------------------------
// Appended function to the User model.  Used to verify a particular
//  user's password.  This bit took me way too long to figure out.  
//----------------------------------------------------------------
User.prototype.verifyPassword = function(password) {
    var testpswd = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
    if (testpswd == this.password)
        return true;
    else
        return false;

};


//----------------------------------------------------------------
// Passport serialization code
//  http://www.passportjs.org/docs/configure/
//----------------------------------------------------------------
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(user, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});


//----------------------------------------------------------------
// Checks if password has > 8 characters
//----------------------------------------------------------------
function isValidPassword(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
};


//----------------------------------------------------------------
// Uses a regex to check if username is valid
//----------------------------------------------------------------
function isValidUsername(username) {
    var re = /^[a-zA-Z0-9]*$/;
    return re.test(String(username));
};


//----------------------------------------------------------------
// Create and Save a new User
//
//  /api/user/register   POST
//
//  Request Parameters:  
//  'username':  string(required)  
//  'password':  string(required)  
//  'email':     string(optional)
//
//  *Successful Response (200 OK)*
//
//  Returns:  
//  'token':  User token
//----------------------------------------------------------------
exports.create = async (req, res, next) => {
    var salt = crypto.randomBytes(64).toString('hex');
    var password = crypto.pbkdf2Sync(req.body.password, salt, 10000, 64, 'sha512').toString('base64');

    if (!isValidPassword(req.body.password)) {
        return res.json({ status: 'error', message: 'Password must be 8 or more characters.' });
    }
    if (!isValidUsername(req.body.username)) {
        return res.json({ status: 'error', message: 'Email address not formed correctly.' });
    }

    // Create a User
    const userInfo = {
        username: req.body.username,
        email: req.body.email,
        role: "user",
        password: password,
        salt: salt
    };


    try {
        var user = await User.create(userInfo);
    } catch (err) {
        return res.json({ status: 'error', message: 'Username already exists' });
    }

    if (user) {
        passport.authenticate('local', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) {
                return res.json({ status: 'error', message: info.message });
            }
            req.logIn(user, { session: false }, function (err) {
                if (err) { return next(err); }

                const body = {_id: user._id, username: user.username };
                const token = jwt.sign( { user: body }, 'TOP_SECRET');
                return res.json({ status: 'ok', token: token });
            });
        })(req, res, next);
    }
};


//----------------------------------------------------------------
// Logs a user in
//
//  /api/user/login   POST
//
//  Request Parameters:  
//  'username':  string(required)  
//  'password':  string(required)
//
//  *Successful Response (200 OK)*
//
//  'token':  User token
//----------------------------------------------------------------
exports.login = (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) {
            return res.json({ status: 'error', message: info.message });
        }
        req.logIn(user, { session: false }, function (err) {
            if (err) { return next(err); }

            const body = {_id: user._id, username: user.username };
            const token = jwt.sign( { user: body }, 'TOP_SECRET');
            return res.json({ status: 'ok', token: token });
        });
    })(req, res, next);
};