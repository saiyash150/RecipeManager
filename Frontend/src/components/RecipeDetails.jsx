import React from 'react';

const RecipeDetails = ({ recipe, onDelete }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Category:</strong> {recipe.category}</p>
      <img src={recipe.imageUrl} alt={recipe.title} width="100" />
      <button onClick={() => onDelete(recipe._id)}>Delete</button>
    </div>
  );
};

export default RecipeDetails;
