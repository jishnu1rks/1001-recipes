import React from "react";
import { CategoryProps } from "./types";

const Category = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}: CategoryProps) => {
  return (
    <div className="category">
      <img src={strCategoryThumb} alt={strCategory} />
      <h5>{strCategory}</h5>
      <p>{strCategoryDescription.slice(0, 100)}</p>
    </div>
  );
};

export default Category;
