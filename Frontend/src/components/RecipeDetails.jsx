import React from 'react';
import styles from '../styles/RecipeDetails.module.css';

const RecipeDetails = ({ recipe, onDelete ,onEdit}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{recipe.title}</h3>
      <p className={styles.ingredients}><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p className={styles.ingredients}><strong>Instructions:</strong> {recipe.instructions}</p>
      <p className={styles.ingredients}><strong>Category:</strong> {recipe.category}</p>
      <img src={recipe.imageUrl} alt={recipe.title} width="100" />
      <div className="buttonContainer">
      <button className={styles.backButton} onClick={() => onDelete(recipe._id)}>Delete</button>
      <button className={styles.backButton} onClick={() => onEdit(recipe)}>Edit</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
