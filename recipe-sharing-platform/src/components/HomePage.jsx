import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../src/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 bg-gray-100">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">
            {recipe.title}
          </h2>
          <p className="text-gray-500 text-sm mb-4">{recipe.summary}</p>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
