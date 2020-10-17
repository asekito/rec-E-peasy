import React, { useState, lazy, Suspense } from "react";
import { Modal } from "@material-ui/core";
import "./RecipeCard.css";

const WholeRecipe = lazy(() => import("./WholeRecipe.js"));

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log(recipe)
    setOpen(!open);
  };

  const ingredientsParsed = JSON.parse(recipe.ingredients);

  return (
    <div className='recipe-card' onClick={toggle}>
      <div className='recipe-info'>
        <div className='recipe-name'>{recipe.recipe_name}</div>
        <div className='ingredients-list-title'>Ingredients:</div>
        <div className='ingredients-list-container'>
          {ingredientsParsed.slice(0, 2).map((ingredientElement, idx) => (
            <div className='individual-ingredient' key={idx}>
              <div className='ingredient-name'>
                {ingredientElement.ingredient}
              </div>
            </div>
          ))}
          <Modal
            open={open}
            onClose={toggle}
            className='modal whole-recipe-modal'
          >
            <Suspense fallback={<div>Loading...</div>}>
              <WholeRecipe recipe={recipe} ingredients={ingredientsParsed} />
            </Suspense>
          </Modal>
        </div>
      </div>
      <div className='recipe-image'>Image here</div>
    </div>
  );
};

export default RecipeCard;
