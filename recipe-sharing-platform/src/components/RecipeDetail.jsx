import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const recipeId = parseInt(id, 10);
      console.log("Recipe ID from URL:", recipeId);
      const selectedRecipe = recipeData.find((r) => r.id === recipeId);
      console.log("Selected Recipe:", selectedRecipe);
      if (selectedRecipe) {
        setRecipe(selectedRecipe);
      } else {
        setError("Recipe not found");
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
      <div className="flex justify-center items-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded mb-4 shadow-md"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
      <ul>
        {recipe.ingredients.split(",").map((ingredient, index) => (
          <li key={index} className="text-md mb-2">
            {ingredient}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
      <p className="text-md">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
