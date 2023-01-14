import React from "react";
import Recipe from "./Recipe";

const Recipes = ({ recipes }: any) => {
  return (
    <div className="recipes">
      {recipes.map((recipe: any, i: number) => (
        <Recipe
          key={i}
          name={recipe.name}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />
      ))}
    </div>
  );
};

export default Recipes;
