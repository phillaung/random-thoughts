var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn')
var passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.isAuthenticated()) console.log('cool')
  res.render('index', { title: 'Express' });
});

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

router.get(
    '/oauth2callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/',
    })
);

router.get('/logout', function (req, res) {
    req.logout(function () {
        res.redirect('/');
    });
});

module.exports = router;
