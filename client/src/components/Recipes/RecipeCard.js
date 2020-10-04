import React, { useState, lazy, Suspense } from "react";
import "./RecipeCard.css";
import { Modal } from "@material-ui/core";

const WholeRecipe = lazy(() => import("./WholeRecipe.js"));

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className='recipe-card' onClick={toggle}>
      <div className='recipe-info'>
        <div className='recipe-name'>{recipe.name}</div>
        <div className='ingredients-list-title'>Ingredients:</div>
        <div className='ingredients-list-container'>
          {recipe.ingredients.slice(0, 2).map((ingredientElement, idx) => (
            <div className='individual-ingredient' key={idx}>
              <div className='ingredient-name'>
                {ingredientElement.ingredient}
              </div>
            </div>
          ))}
          <Modal open={open} onClose={toggle} className='modal'>
            <Suspense fallback={<div>Loading...</div>}>
              <WholeRecipe recipe={recipe} />
            </Suspense>
          </Modal>
        </div>
      </div>
      <div className='recipe-image'>Image here</div>
    </div>
  );
};

export default RecipeCard;
