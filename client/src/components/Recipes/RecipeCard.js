import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div>{recipe.name}</div>
      {recipe.ingredients.map((ingredientElement) => (
        <div>
          <div>{ingredientElement.ingredient}</div>
          <div>
            {ingredientElement.estimated_amount
              ? ingredientElement.estimated_amount
              : null}
          </div>
          <div>
            {ingredientElement.measured_amount ? (
              <div>
                <span>{ingredientElement.measured_amount.amount} </span>
                <span>{ingredientElement.measured_amount.unit}</span>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
