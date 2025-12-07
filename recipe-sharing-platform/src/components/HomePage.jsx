import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from JSON dynamically
  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  // Function to add a new recipe to the state
  const addRecipe = (newRecipe) => {
    // Optionally add an ID
    const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
    setRecipes([...recipes, { id, ...newRecipe }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        🍲 Recipe Sharing Platform
      </h1>

      {/* Add Recipe Form */}
      <AddRecipeForm addRecipe={addRecipe} />

      {/* Recipe Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded-xl shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-md mb-3 w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}