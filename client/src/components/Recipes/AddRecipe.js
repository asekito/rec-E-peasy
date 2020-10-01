import React, { useState } from "react";
import AddingIngredient from "./AddingIngredient";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const addIngredient = (e) => {
    e.preventDefault();
    let input = `
                <label>
                  Ingredient:
                  <input type='text' />
                </label>
                <label>
                  Measurement:
                  <input type='text' />
                </label>
                <label>
                  Estimated:
                  <input type='text' />
                </label>
                `;
    document.getElementById("add-ingred-wrapper").innerHTML += input;
  };

  return (
    <div className="popup add-recipe">
      <h1>Add New Recipe</h1>
      <form className="new-ingredient-form">
        <label>
          Recipe Name
          <input type="text" />
        </label>
        <label>
          Ingredient
          <input type="text" />
        </label>
        <label>
          Estimated amount:
          <input type="text" />
        </label>
        <label>
          Measured amount:
          <input type="number" />
          <select name="unit">
            <option value="ounce">ounce</option>
            <option value="pounds">pound(s)</option>
            <option value="pint">pint</option>
            <option value="cup">cup</option>
            <option value="tablespoons">tablespoons</option>
            <option value="teaspoon">teaspoon</option>
          </select>
        </label>
        <button onClick={(e) => addIngredient(e)}>+ Ingredient</button>
        <div id="add-ingred-wrapper"></div>
      </form>
    </div>
  );
};

export default AddRecipe;
