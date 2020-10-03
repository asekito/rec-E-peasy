import React, { useState } from "react";
import AddingIngredient from "./AddingIngredient";
import "./AddRecipe.css";
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from "regenerator-runtime";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();
    const input = AddingIngredient;
    document.getElementById("add-ingred-wrapper").innerHTML += input;
  };

  const createIngredients = async (e) => {
    e.preventDefault();
    const hi = document.getElementsByClassName("new-ingredient-measurements");
    for (const element of hi) {
      const ingredientObject = {};
      for (const input of element) {
        if (input.value) {
          ingredientObject[input.name] = input.value;
        }
      }
      await setIngredients((ingredients) => [...ingredients, ingredientObject]);
    }
  };

  // const submitRecipeHandler = () => {};

  return (
    <div className='popup add-recipe'>
      <h1 onClick={() => console.log(ingredients)}>Add New Recipe</h1>
      <div className='add-recipe-name'>
        <label>
          Recipe Name
          <input
            type='text'
            name='recipe'
            autoComplete='off'
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </label>
      </div>
      <div id='add-ingred-wrapper'>
        <form className='new-ingredient-measurements'>
          <input
            autoComplete='off'
            type='text'
            name='ingredient'
            placeholder='ingredient name'
          />
          <input
            autoComplete='off'
            type='text'
            name='estimated-amount'
            placeholder='guesstimated amount (OPTIONAL)'
          />
          <input
            autoComplete='off'
            type='number'
            name='measured-amount'
            placeholder='measured amount (OPTIONAL)'
          />
          <select name='measured-unit' className='measured-unit'>
            <option defaultValue='' value=''>
              -
            </option>
            <option value='ounce'>ounce</option>
            <option value='pounds'>pound(s)</option>
            <option value='pint'>pint</option>
            <option value='cup'>cup</option>
            <option value='tablespoons'>tablespoons</option>
            <option value='teaspoon'>teaspoon</option>
          </select>
        </form>
      </div>
      <button className='btn add-recipe-btn' onClick={(e) => addIngredient(e)}>
        Add Ingredient
      </button>
      <button
        className='btn add-recipe-btn'
        onClick={(e) => createIngredients(e)}
      >
        Add All Ingredients
      </button>
      <button className='btn add-recipe-btn'>Add Recipe</button>
      <div>
        <h2>Preview</h2>
        {ingredients.map((ingredient, idx) => (
          <div key={idx}>{ingredient.ingredient}</div>
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
