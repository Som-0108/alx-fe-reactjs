import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === id)
  )

  const favorites = useRecipeStore((state) => state.favorites)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations)
  const recommendations = useRecipeStore((state) => state.recommendations)

  const [isEditing, setIsEditing] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favorites.includes(recipe?.id))
    generateRecommendations()
  }, [favorites, recipe])

  if (!recipe) return <p>Recipe not found.</p>

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id)
    } else {
      addFavorite(recipe.id)
    }
  }

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <p style={{ display: 'none' }}>Recipe ID: {recipe.id}</p>

          <div style={{ marginTop: 16 }}>
            <button onClick={() => setIsEditing(true)}>Edit</button> {' | '}
            <DeleteRecipeButton recipeId={recipe.id} /> {' | '}
            <button onClick={toggleFavorite}>
              {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button> {' | '}
            <Link to="/">Back to list</Link>
          </div>

          {recommendations.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <h3>Recommended Recipes:</h3>
              <ul>
                {recommendations.map((rec) => (
                  <li key={rec.id}>
                    <Link to={`/recipe/${rec.id}`}>{rec.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default RecipeDetails