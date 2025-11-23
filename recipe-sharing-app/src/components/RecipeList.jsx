// src/components/RecipeList.jsx
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import SearchBar from './SearchBar'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)
  const favorites = useRecipeStore((state) => state.favorites)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)

  const handleEdit = (id) => {
    const newTitle = prompt('Enter new title:')
    const newDescription = prompt('Enter new description:')
    if (newTitle && newDescription) {
      updateRecipe(id, { title: newTitle, description: newDescription })
    }
  }

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  const displayRecipes = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      <h2>Recipe List</h2>

      {/* Search bar */}
      <SearchBar />

      {displayRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>

            {/* Edit & Delete buttons */}
            <button onClick={() => handleEdit(recipe.id)}>Edit</button>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>

            {/* Favorite toggle */}
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList