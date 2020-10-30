import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Recipes.css";
import { Modal } from "@material-ui/core";
// import RecipeCard from "./RecipeCard";

const RecipeCard = lazy(() => import("./RecipeCard.js"));
const AddRecipe = lazy(() => import("./AddRecipe"));

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState(false);

  const toggle = () => {
    setNewRecipe(!newRecipe);
  };

  useEffect(() => {
    fetch("/api/recipes/get-all-recipes", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.errors) {
          throw data.errors;
        }
        if (data.body) {
          setRecipes(data.body);
        }
      })
      .catch((err) => {
        alert(err); // Come back and fix error handling
      });
  }, []);

  return (
    <div className='recipes-page'>
      <h1 style={{ marginTop: 60, color: "white" }}>Your Recipes</h1>
      <div>
        <button className='btn' onClick={toggle}>
          Add Recipe
        </button>
      </div>
      <div>
        <Modal open={newRecipe} onClose={toggle} className='modal'>
          <Suspense fallback={<div>Loading ...</div>}>
            <AddRecipe />
          </Suspense>
        </Modal>
      </div>
      <div className='card-container'>
        {recipes.map((recipe, idx) => (
          <Suspense fallback={<div>Loading...</div>} key={idx}>
            <RecipeCard recipe={recipe} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
