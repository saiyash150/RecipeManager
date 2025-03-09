import React, { useEffect, useState } from "react";
import RecipeList from "./components/RecipeList";

import "./styles/App.module.css";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: 10 }}>
        Recipe Management Application
      </h1>

      <RecipeList />
    </div>
  );
}

export default App;
