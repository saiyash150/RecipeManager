import React, { useEffect, useState } from 'react';
import { getRecipes, deleteRecipe } from '../api/api';
import RecipeDetails from './RecipeDetails';
import styles from '../styles/RecipeList.module.css';

import RecipeSubmissionForm from './RecipeSubmissionForm';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  

  const fetchRecipes = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    fetchRecipes();
  };


  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
  };



  const handleEditComplete = () => {
    fetchRecipes();
    alert('Recipe updated successfully!');
    setSelectedRecipe(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formed}>

<RecipeSubmissionForm 
        onRecipeAdded={fetchRecipes} 
        selectedRecipe={selectedRecipe} 
        onEditComplete={handleEditComplete}
      /></div>
      <div className={styles.recipeList}>
      {recipes.map(recipe => (
        <RecipeDetails key={recipe._id} recipe={recipe} onDelete={handleDelete} onEdit={handleEdit} />
      ))}</div>
    </div>
  );
};

export default RecipeList;
