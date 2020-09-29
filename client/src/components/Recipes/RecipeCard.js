import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div>Recipe: {recipe.name}</div>
      <div>Ingredients: </div>
      <div>
        {recipe.ingredients.slice(0, 2).map((ingredientElement, idx) => (
          <div>
            <div>{ingredientElement.ingredient}</div>
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
      <div>See whole recipe</div>
    </div>
  );
};

export default RecipeCard;
