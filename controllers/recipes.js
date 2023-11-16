const Recipe = require('../models/recipe')

async function index(req, res) {
    const recipes = await Recipe.find({ user: req.user._id })
    res.render('recipes/index', { title: 'Recipes', recipes })
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe'})
}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.ingredients = req.body.ingredients.split(',')
    req.body.instructions = req.body.instructions.split('..');
    console.log(req.body)
    try {
        await Recipe.create(req.body)
        res.redirect('/recipes');
    } catch (err) {
        console.log(err)
        res.redirect('/recipes/new');
    }
}

module.exports = {
    index,
    new: newRecipe,
    create,
};