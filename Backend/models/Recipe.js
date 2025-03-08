const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a recipe title']
    },
    ingredients: {
        type: [String],
        required: [true, 'Please enter ingredients']
    },
    instructions: {
        type: String,
        required: [true, 'Please enter cooking instructions']
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
