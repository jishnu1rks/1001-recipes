import React from 'react';
import { CategoryProps } from './types';
import { Link } from 'react-router-dom';

const Category = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}: CategoryProps) => {
  return (
    <Link to={`categoryRecipe/${strCategory}`}>
      <div className="category">
        <h5>{strCategory}</h5>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
    </Link>
  );
};

export default Category;
