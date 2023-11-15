const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: String,
        description: String,
        pic: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Recipe', recipeSchema);
