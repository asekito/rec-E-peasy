import React, { useState } from "react";
import AddingIngredient from "./AddingIngredient";
import "./AddRecipe.css";
import regeneratorRuntime from "regenerator-runtime";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();
    let input = `
                  <form class="new-ingredient-measurements">
                    <input type="text" name="ingredient" />
                    <input type="text" name="estimated-amount" />
                    <input type="number" name="measured-amount" />
                    <select name="measured-unit">
                      <option defaultValue="" value="">
                        -
                      </option>
                      <option value="ounce">ounce</option>
                      <option value="pounds">pound(s)</option>
                      <option value="pint">pint</option>
                      <option value="cup">cup</option>
                      <option value="tablespoons">tablespoons</option>
                      <option value="teaspoon">teaspoon</option>
                    </select>
                </form>
                `;
    document.getElementById("add-ingred-wrapper").innerHTML += input;
  };

  const createIngredients = async (e) => {
    e.preventDefault();
    let hi = document.getElementsByClassName("new-ingredient-measurements");
    for (let element of hi) {
      let ingredientObject = {};
      for (let input of element) {
        if (input.value) {
          ingredientObject[input.name] = input.value;
        }
      }
      await setIngredients((ingredients) => [...ingredients, ingredientObject]);
    }
  };

  return (
    <div className="popup add-recipe">
      <h1 onClick={() => console.log(ingredients)}>Add New Recipe</h1>
      <div className="add-recipe-name">
        <label>
          Recipe Name
          <input type="text" name="recipe" />
        </label>
      </div>
      <button onClick={(e) => addIngredient(e)}>+ Ingredient</button>
      <div id="add-ingred-wrapper">
        <form className="new-ingredient-measurements">
          <input type="text" name="ingredient" />
          <input type="text" name="estimated-amount" />
          <input type="number" name="measured-amount" />
          <select name="measured-unit">
            <option defaultValue="" value="">
              -
            </option>
            <option value="ounce">ounce</option>
            <option value="pounds">pound(s)</option>
            <option value="pint">pint</option>
            <option value="cup">cup</option>
            <option value="tablespoons">tablespoons</option>
            <option value="teaspoon">teaspoon</option>
          </select>
        </form>
      </div>

      <button onClick={(e) => createIngredients(e)}>Add All Ingredients</button>
      <button>Add Recipe</button>
      <div>
        <h2>Preview</h2>
        {ingredients.map((ingredient, idx) => (
          <div>{ingredient.ingredient}</div>
        ))}
      </div>
    </div>
  );
};

export default AddRecipe;

// {
/* <label>
<input type="text" />
<input type="number" />
<select name="unit">
  <option value="ounce">ounce</option>
  <option value="pounds">pound(s)</option>
  <option value="pint">pint</option>
  <option value="cup">cup</option>
  <option value="tablespoons">tablespoons</option>
  <option value="teaspoon">teaspoon</option>
</select>

}
*/
