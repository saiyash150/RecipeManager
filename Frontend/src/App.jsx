import React, { useEffect, useState } from "react";
import RecipeList from "./components/RecipeList";

import "./styles/App.module.css";
function App() {
  return (
    <div className="background">
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>
        Recipe Management Application
      </h1>

      <RecipeList />
    </div>
  );
}

export default App;
