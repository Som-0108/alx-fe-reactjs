// src/components/FavoritesList.jsx
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom'

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  )

  if (favorites.length === 0) {
    return <p>No favorites yet. Add some from the recipe list!</p>
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          )
      )}
    </div>
  )
}

export default FavoritesList