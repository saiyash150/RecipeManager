import React, { useState } from 'react';
import { createRecipe } from '../api/api';
import styles from '../styles/RecipeSubmissionForm.module.css';

const RecipeSubmissionForm = ({ onRecipeAdded }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(recipe);
    onRecipeAdded();
    setRecipe({
      title: '',
      ingredients: '',
      instructions: '',
      category: '',
      imageUrl: ''
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>🍳 Add New Recipe</h2>

      <input 
        type="text" 
        name="title" 
        placeholder="Title" 
        value={recipe.title} 
        onChange={handleChange} 
        required 
        className={styles.input}
      />

      <textarea 
        name="ingredients" 
        placeholder="Ingredients" 
        value={recipe.ingredients} 
        onChange={handleChange} 
        required 
        className={styles.textarea}
      />

      <textarea 
        name="instructions" 
        placeholder="Instructions" 
        value={recipe.instructions} 
        onChange={handleChange} 
        required 
        className={styles.textarea}
      />

      <input 
        type="text" 
        name="category" 
        placeholder="Category" 
        value={recipe.category} 
        onChange={handleChange} 
        required 
        className={styles.input}
      />

      <input 
        type="text" 
        name="imageUrl" 
        placeholder="Image URL" 
        value={recipe.imageUrl} 
        onChange={handleChange} 
        required 
        className={styles.input}
      />

      <button type="submit" className={styles.submitButton}>
        ➕ Add Recipe
      </button>
    </form>
  );
};

export default RecipeSubmissionForm;
