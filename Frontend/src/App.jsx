import React, { useEffect, useState } from "react";
import RecipeSubmissionForm from "./components/RecipeSubmissionForm";
import RecipeList from "./components/RecipeList";
import { getRecipes } from "./api/api";
import DragAndDrop from "./components/DragAndDrop";

import "./styles/App.module.css";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" ,paddingTop:10}}>Recipe Management Application</h1>

      <RecipeList />
    </div>
  );
}

export default App;
