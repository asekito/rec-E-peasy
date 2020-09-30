import React, { useState } from "react";
import "./RecipeCard.css";
import { Modal } from "@material-ui/core/";

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const WholeRecipe = (
    <div className="recipe-popup">
      <h2>{recipe.name}</h2>
      <div className="recipe-info">
        <div className="recipe-name">{recipe.name}</div>
        <div className="ingredients-list-title">
          <b>Ingredients:</b>
        </div>
        <div className="ingredients-list-container">
          {recipe.ingredients.map((ingredientElement, idx) => (
            <div className="individual-ingredient">
              <div className="ingredient-name">
                {ingredientElement.ingredient}
              </div>
              {ingredientElement.estimated_amount ? (
                <div>{ingredientElement.estimated_amount}</div>
              ) : null}
              {ingredientElement.measured_amount ? (
                <div>
                  {ingredientElement.measured_amount.amount}{" "}
                  {ingredientElement.measured_amount.unit}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="recipe-image">Image here</div>
    </div>
  );

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="recipe-card" onClick={toggle}>
      <div className="recipe-info">
        <div className="recipe-name">{recipe.name}</div>
        <div className="ingredients-list-title">
          <b>Ingredients:</b>
        </div>
        <div className="ingredients-list-container">
          {recipe.ingredients.slice(0, 2).map((ingredientElement, idx) => (
            <div className="individual-ingredient">
              <div className="ingredient-name">
                {ingredientElement.ingredient}
              </div>
            </div>
          ))}
          <Modal
            open={open}
            onClose={toggle}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className="modal"
          >
            {WholeRecipe}
          </Modal>
        </div>
      </div>
      <div className="recipe-image">Image here</div>
    </div>
  );
};

export default RecipeCard;
