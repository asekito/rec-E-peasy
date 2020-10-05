import React, { useState } from "react";

const AddingIngredient = () => {
  const [currentIngredient, setCurrentIngredient] = useState({});

  return (
    <form className='new-ingredient-measurements'>
      <input
        type='text'
        name='ingredient'
        placeholder='ingredient name'
        onChange={(e) => {
          setCurrentIngredient({
            ...currentIngredient,
            [e.target.name]: e.target.value,
          });
          console.log(currentIngredient);
        }}
      />
      <input
        type='text'
        name='estimated_amount'
        placeholder='guesstimated amount (OPTIONAL)'
        onChange={(e) => {
          setCurrentIngredient({
            ...currentIngredient,
            [e.target.name]: e.target.value,
          });
          console.log(currentIngredient);
        }}
      />
      <input
        type='number'
        name='measured_amount'
        placeholder='measured amount (OPTIONAL)'
        onChange={(e) => {
          setCurrentIngredient({
            ...currentIngredient,
            [e.target.name]: e.target.value,
          });
          console.log(currentIngredient);
        }}
      />
      <select
        name='measured_unit'
        className='measured-unit'
        onChange={(e) => {
          setCurrentIngredient({
            ...currentIngredient,
            [e.target.name]: e.target.value,
          });
          console.log(currentIngredient);
        }}
      >
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
      <button>Add Ingredient</button>
    </form>
  );
};

export default AddingIngredient;

// hold temp
{
  /* <div id='add-ingred-wrapper'>
{ingredients.map((ingredient, idx) => (
  <AddingIngredient
    key={idx}
    ingredient={ingredient}
    ingredients={ingredients}
    setIngredients={setIngredients}
  />
))}
</div> */
}
