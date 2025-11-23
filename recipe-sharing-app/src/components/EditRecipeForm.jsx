// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const navigate = useNavigate()

  const [title, setTitle] = useState(recipe?.title || '')
  const [description, setDescription] = useState(recipe?.description || '')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (event) => {
    // ✅ Explicit preventDefault
    event.preventDefault()

    if (!title.trim()) return

    updateRecipe(recipe.id, {
      title: title.trim(),
      description: description.trim(),
    })

    // Close the edit form if inline, or navigate if using separate page
    if (onClose) onClose()
    else navigate(`/recipe/${recipe.id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save</button>
      {onClose && (
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      )}
    </form>
  )
}

export default EditRecipeForm