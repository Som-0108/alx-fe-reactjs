// src/components/SearchBar.jsx
import React, { useEffect } from 'react'
import useRecipeStore from './recipeStore'

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
  const filterRecipes = useRecipeStore((state) => state.filterRecipes)

  // Whenever searchTerm changes, update filteredRecipes
  useEffect(() => {
    filterRecipes()
  }, [searchTerm, filterRecipes])

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
    />
  )
}

export default SearchBar