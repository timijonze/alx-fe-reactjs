import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      <Link to={"/add-recipe"}>Add New Recipe</Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl">
            <Link to={`/recipe/${recipe.id}`}>
            <div className="flex justify-center items-center">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded"
              />
            </div>
            
           <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
