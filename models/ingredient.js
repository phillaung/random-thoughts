const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
    {
        name: String,
        pic: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        recipes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Recipe',
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);
