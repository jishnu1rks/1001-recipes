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
        <img src={strCategoryThumb} alt={strCategory} />
        <h5>{strCategory}</h5>
        <p>{strCategoryDescription.slice(0, 100)}</p>
      </div>
    </Link>
  );
};

export default Category;
