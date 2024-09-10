import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      console.log("Data:", data); // Debugging line
      const recipeData = data.find((recipe) => recipe.id === parseInt(id));
      console.log("Recipe Data:", recipeData); // Debugging line
      setRecipe(recipeData);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        {recipe.title}
      </h1>

      <div className="m-3">
        <img src={recipe.image} alt={recipe.title} className="mx-auto mb-4" />
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
          {recipe.summary}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Ingredients
          </h2>
          <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg lg:text-xl">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Instructions
          </h2>
          <ol className="list-decimal pl-5 text-sm sm:text-base md:text-lg lg:text-xl">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
