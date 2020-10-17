import React, { useState } from "react";
import "./AddRecipe.css";
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from "regenerator-runtime";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});

  const submitRecipeHandler = (e) => {
    e.preventDefault();
    const data = { name: recipeName, ingredients: ingredients };
    fetch("/api/recipes/post-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((data) => console.log(data));
  };

  return (
    <div className='popup add-recipe'>
      <div className='adding-recipe-container'>
        <h1 style={{ textAlignLast: "center" }}>Add New Recipe</h1>
        <div style={{ textAlignLast: "center" }}>
          <input
            type='text'
            style={{ marginBottom: 35, textAlign: "center" }}
            className='add-rec-form'
            name='recipe'
            autoComplete='off'
            placeholder='Name of your recipe'
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>

        <form className='new-ingredient-measurements'>
          <input
            type='text'
            autoComplete='off'
            className='ingred add-rec-form'
            name='ingredient'
            placeholder='ingredient name'
            onChange={(e) => {
              setCurrentIngredient({
                ...currentIngredient,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <input
            type='text'
            autoComplete='off'
            className='ingred add-rec-form'
            name='estimated_amount'
            placeholder='guesstimated amount (OPTIONAL)'
            onChange={(e) => {
              setCurrentIngredient({
                ...currentIngredient,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <input
            type='reset'
            className='btn add-recipe-btn'
            onClick={() => {
              if (
                currentIngredient["measured_amount"] &&
                isNaN(parseInt(currentIngredient["measured_amount"]))
              ) {
                return alert("Measured amount must be a number.");
              }
              if (currentIngredient.ingredient) {
                setIngredients([...ingredients, currentIngredient]);
                setCurrentIngredient({});
                return;
              } else {
                return alert("Please input an ingredient");
              }
            }}
            value='Add Ingredient'
          />
          <button
            className='btn add-recipe-btn'
            onClick={(e) => submitRecipeHandler(e)}
          >
            Save
          </button>
        </form>
      </div>
      <div className='preview'>
        <h1 style={{ textAlignLast: "center" }}>Ingredients</h1>
        {ingredients.map((ingredient, idx) => (
          <div key={idx}>
            {ingredient.ingredient}{" "}
            {ingredient.estimated_amount
              ? `${ingredient.estimated_amount} `
              : null}
            {ingredient.measured_amount
              ? `${ingredient.measured_amount} ${
                  ingredient.measured_unit ? ingredient.measured_unit : null
                }`
              : null}
          </div>
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
