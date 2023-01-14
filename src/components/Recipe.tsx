import React from "react";

const Recipe = ({ name, ingredients, steps }: any) => {
  return (
    <section className="recipe">
      <h1>{name}</h1>
      <ul>
        {ingredients.map((ingredient: any, i: number) => (
          <li key={i}>
            {ingredient.name} - {ingredient.measurement}
          </li>
        ))}
      </ul>
      <section>
        <h2>Cooking Instructions</h2>
        {steps.map((step: any, i: number) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </section>
  );
};

export default Recipe;
