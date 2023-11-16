const Recipe = require('../models/recipe');

async function index(req, res) {
    const recipes = await Recipe.find({}).populate('user');
    res.render('index', { title: 'Home', recipes });
}

module.exports = {
    index
};
