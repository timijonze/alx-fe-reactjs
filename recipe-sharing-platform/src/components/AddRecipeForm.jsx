import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    if (validateForm()) {
      console.log("Form Data:", { title, ingredients, steps });

      resetForm();
    } else {
      console.log("Form Validation Failed");
    }
  };

  const validateForm = () => {
    console.log("Validating Form");

    console.log("Title:", title);
    console.log("Ingredients:", ingredients);
    console.log("Steps:", steps);

    if (!title) {
      setErrors("Title is required");
      console.log("Validation Error: Title is required");
      return false;
    }

    if (!ingredients) {
      setErrors("Ingredients are required");
      console.log("Validation Error: Ingredients are required");
      return false;
    }

    const ingredientsArray = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    console.log("Ingredients Array:", ingredientsArray);

    if (ingredientsArray.length < 2) {
      setErrors("Please enter at least two ingredients separated by commas");
      console.log("Validation Error: Less than two ingredients");
      return false;
    }

    if (!steps) {
      setErrors("Steps are required");
      console.log("Validation Error: Steps are required");
      return false;
    }

    setErrors("");
    return true;
  };

  const resetForm = () => {
    setTitle("");
    setIngredients("");
    setSteps("");
    console.log("Form Reset");
  };

  return (
    <div className="container mx-auto sm:w-1/2 md:w-3/4">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="shadow-sm"
      >
        {errors && <div className="text-red-500 mb-4">{errors}</div>}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-semibold mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="6"
          />
        </div>
        <button
          type="submit"
          className=" text-black py-2 px-4 rounded hover:bg-green-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
