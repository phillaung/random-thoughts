const Recipe = require('../models/recipe')

async function index(req, res) {
    const recipes = await Recipe.find({ user: req.user._id })
    res.render('recipes/index', { title: 'Recipes', recipes })
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe'})
}

async function create(req, res) {
    console.log(req.body)
    res.redirect('/recipes')
}

module.exports = {
    index,
    new: newRecipe,
    create,
};