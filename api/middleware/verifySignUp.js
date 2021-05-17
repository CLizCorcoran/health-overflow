const db = require("../models");
const User = db.user;


// Function for registration.  Ensure no duplicate username or passwords.
// Copied from https://bezkoder.com/node-js-jwt-authentication-mysql/
const verifySignup = (req, res, next) => {
    
    // Username
    User.findOne( {
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            return res.json({ status: 'error', message: 'Registration unsuccessful.  Username is already in use.' });
         }

        //Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                return res.json({ status: 'error', message: 'Registration unsuccessful.  Email is already in use.' });
            }

            next();
        });
    });
};

module.exports = verifySignup;