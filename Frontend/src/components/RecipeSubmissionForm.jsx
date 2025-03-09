import React, { useState, useEffect } from "react";
import { createRecipe, updateRecipe } from "../api/api";
import styles from "../styles/RecipeSubmissionForm.module.css";

const RecipeSubmissionForm = ({
  onRecipeAdded,
  selectedRecipe,
  onEditComplete,
}) => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [selectedRecipe]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedRecipe) {
      await updateRecipe(selectedRecipe._id, recipe);
      onEditComplete();
    } else {
      const response = await fetch(
        "https://recipemanager-qnqg.onrender.com/api/recipes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            title: String(recipe.title),
            ingredients: String(recipe.ingredients),
            instructions: String(recipe.instructions),
            category: String(recipe.category),
            imageUrl: String(recipe.imageUrl)
          })
        }
      );

      const data = await response.json();
      console.log('Response:', data);
      onRecipeAdded();
    }

    setRecipe({
      title: "",
      ingredients: "",
      instructions: "",
      category: "",
      imageUrl: "",
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
