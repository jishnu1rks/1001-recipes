import React from "react";
import axios from "axios";
import Category from "../Category";

const Categories = ({ categories }: any) => {
  return (
    <div className="categories">
      {categories.map((category: any) => (
        <Category key={category.idCategory} {...category} />
      ))}
    </div>
  );
};

export default Categories;
