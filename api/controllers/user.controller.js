const db = require("../models");
const User = db.user;
var crypto = require('crypto');
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const { nextTick } = require("process");


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
    async function (username, password, done) {
        var user = User.findOne(
            {
                where: {
                    username: username
                }
            });
        if (user == null) {
            return done(null, false, { message: 'Unknown user.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }
));


// Checks if password has > 8 characters
function isValidPassword(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
};


// Uses a regex to check if username is valid
function isValidUsername(username) {
    var re = /^[a-zA-Z0-9]*$/;
    return re.test(String(username));
}

// Create and Save a new User
exports.create = (req, res) => {
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
        var user = User.create(userInfo);
    } catch (err) {
        return res.json({status: 'error', message: 'Username already exists'});
    }

    if (user) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) {
                return res.json({status: 'error', message: info.message});
            }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.json({status: 'ok'});
            });
        })(req, res, next);
    }
};