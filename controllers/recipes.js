const Recipe = require('../models/recipe')

async function index(req, res) {
    console.log(req.user)
    const recipes = await Recipe.find({ user: req.user._id })
    res.render('recipes/index', { title: 'Recipes', recipes })
}

module.exports = {
    index
}