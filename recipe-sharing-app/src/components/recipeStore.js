import create from 'zustand'

export const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    addRecipe: (newRecipe) => set(state => {
        const updatedRecipes = [...state.recipes, newRecipe];
        return {
            recipes: updatedRecipes,
            filteredRecipes: state.filterRecipes(updatedRecipes, state.searchTerm)
        };
    }),
    updateRecipe: (updatedRecipe) => set(state => {
        const updatedRecipes = state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe);
        return {
            recipes: updatedRecipes,
            filteredRecipes: state.filterRecipes(updatedRecipes, state.searchTerm)
        };
    }),
    deleteRecipe: (id) => set(state => {
        const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
        return {
            recipes: updatedRecipes,
            filteredRecipes: state.filterRecipes(updatedRecipes, state.searchTerm)
        };
    }),
    setRecipes: (recipes) => set({
        recipes,
        filteredRecipes: recipes
    }),
    setSearchTerm: (searchTerm) => set(state => ({
        searchTerm,
        filteredRecipes: state.filterRecipes(state.recipes, searchTerm)
    })),
    filterRecipes: (recipes, searchTerm) =>
        recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
}));