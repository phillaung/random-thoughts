var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn');
var recipesCtrl = require('../controllers/recipes')

router.get('/', ensureLoggedIn, recipesCtrl.index);
router.get('/new', ensureLoggedIn, recipesCtrl.new);
router.post('/create', ensureLoggedIn, recipesCtrl.create)
router.get('/:id', recipesCtrl.show)

module.exports = router;
