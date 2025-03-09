import React, { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../api/api";
import RecipeDetails from "./RecipeDetails";
import styles from "../styles/RecipeList.module.css";
import card from "../styles/RecipeDetails.module.css";

import RecipeSubmissionForm from "./RecipeSubmissionForm";

const surprise = [
  {
    title: "Spaghetti Carbonara",
    ingredients:
      "Spaghetti, Eggs, Parmesan Cheese, Pancetta, Salt, Black Pepper",
    instructions:
      "1. Cook spaghetti in salted water. 2. Fry pancetta until crispy. 3. Whisk eggs and Parmesan in a bowl. 4. Mix pasta with pancetta, then add egg mixture. 5. Stir quickly to avoid scrambling the eggs.",
    category: "Italian",
    imageUrl:
      "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
  },
  {
    title: "Chicken Biryani",
    ingredients:
      "Basmati Rice, Chicken, Yogurt, Onions, Tomatoes, Garam Masala, Bay Leaf, Cloves, Ginger, Garlic",
    instructions:
      "1. Marinate chicken in yogurt and spices. 2. Cook onions, tomatoes, and chicken. 3. Boil rice separately. 4. Layer cooked chicken and rice. 5. Cook on low flame for 20 minutes.",
    category: "Indian",
    imageUrl:
      "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg",
  },
  {
    title: "Classic Beef Burger",
    ingredients:
      "Ground Beef, Burger Buns, Lettuce, Tomato, Cheese, Onion, Salt, Pepper, Mayonnaise, Ketchup",
    instructions:
      "1. Season ground beef and form patties. 2. Grill patties for 4-5 minutes per side. 3. Assemble burger with lettuce, tomato, cheese, and sauces. 4. Serve hot.",
    category: "American",
    imageUrl:
      "https://simplehomeedit.com/wp-content/uploads/2024/03/Homemade-Beef-Burgers-4.webp",
  },
  {
    title: "Pancakes",
    ingredients:
      "All-purpose flour, Baking powder, Milk, Eggs, Butter, Sugar, Salt, Maple Syrup",
    instructions:
      "1. Mix dry ingredients. 2. Whisk milk, eggs, and melted butter. 3. Combine wet and dry ingredients. 4. Cook pancakes on a non-stick pan until golden. 5. Serve with maple syrup.",
    category: "Breakfast",
    imageUrl:
      "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
  },
  {
    title: "Chicken Alfredo Pasta",
    ingredients:
      "Pasta, Chicken Breast, Heavy Cream, Garlic, Parmesan Cheese, Salt, Pepper, Olive Oil",
    instructions:
      "1. Cook pasta in salted water. 2. Sauté chicken breast in olive oil. 3. Add garlic and cream, then simmer. 4. Toss pasta in the sauce. 5. Garnish with Parmesan and serve.",
    category: "Italian",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EuVYEm22v_-iy2vFQ-4niAT7Dk4uzs_CYA&s",
  },
];

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [surpriseRecipe, setSurpriseRecipe] = useState(surprise[0]);
  const [hideForm, sethideForm] = useState(true);

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
    alert("Recipe updated successfully!");
    setSelectedRecipe(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formed}>
        <RecipeSubmissionForm
          onRecipeAdded={fetchRecipes}
          selectedRecipe={selectedRecipe}
          onEditComplete={handleEditComplete}
        />
      </div>
      <div className={styles.recipeList}>
        {recipes.map((recipe) => (
          <RecipeDetails
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}

        {hideForm ? (
          <div className={styles.cardContainer}>
            <button
              onClick={() => {
                sethideForm(false);

                const randomIndex =
                  surprise[Math.floor(Math.random() * surprise.length)];
                setSurpriseRecipe(randomIndex);
              }}
              style={{
                outline: "none",
                backgroundColor: "transparent",
                border: "none",
                width: "200",
                height: "200",
              }}
            >
              {" "}
              <img
                src="https://media.istockphoto.com/id/517802932/vector/surprise-comic-style-phrase.jpg?s=612x612&w=0&k=20&c=wlJ0nTxAp2HVpZNGaIEP9gR83GUGoSrGerR9uH8bikg="
                style={{ borderRadius: 200, height: 200, width: 200 }}
              />
            </button>
          </div>
        ) : (
          <div className={styles.cardContainer}>
            <h3 className={card.title}>{surpriseRecipe.title}</h3>
            <p className={card.ingredients}>
              <strong>Ingredients:</strong> {surpriseRecipe.ingredients}
            </p>
            <p className={card.ingredients}>
              <strong>Instructions:</strong> {surpriseRecipe.instructions}
            </p>
            <p className={card.ingredients}>
              <strong>Category:</strong> {surpriseRecipe.category}
            </p>
            <img
              src={surpriseRecipe.imageUrl}
              alt={surpriseRecipe.title}
              width="300"
              height="200"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
