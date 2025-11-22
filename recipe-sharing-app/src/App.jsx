import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
