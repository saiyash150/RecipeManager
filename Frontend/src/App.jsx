import React, { useEffect, useState } from 'react';
import RecipeSubmissionForm from './components/RecipeSubmissionForm';
import RecipeList from './components/RecipeList';
import { getRecipes } from './api/api';
import DragAndDrop from './components/DragAndDrop';



import './styles/App.module.css';
function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Management Application</h1>
      <RecipeSubmissionForm onRecipeAdded={fetchRecipes} />
      <DragAndDrop recipes={recipes} />
      <RecipeList />
    </div>
  );
}

export default App;
