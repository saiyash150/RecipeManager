import React, { useEffect, useState } from 'react';
import { getRecipes, deleteRecipe } from '../api/api';
import RecipeDetails from './RecipeDetails';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div>
      {recipes.map(recipe => (
        <RecipeDetails key={recipe._id} recipe={recipe} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default RecipeList;
