const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// @route GET /recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route POST /recipes
router.post('/', async (req, res) => {
    const { title, ingredients, instructions, category, imageUrl } = req.body;

    if (!title || !ingredients || !instructions || !category || !imageUrl) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const newRecipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            category,
            imageUrl
        });
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route PUT /recipes/:id
router.put('/:id', async (req, res) => {
    const { title, ingredients, instructions, category, imageUrl } = req.body;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, {
            title, ingredients, instructions, category, imageUrl
        }, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route DELETE /recipes/:id
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
