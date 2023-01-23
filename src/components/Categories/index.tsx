import React from 'react';
import Category from '../Category';
import SearchByCategory from '../SearchByCategory';

const Categories = ({ categories }: any) => {
  return (
    <>
      <SearchByCategory />
      <h4>Categories</h4>
      <div className="categories">
        {categories.length > 0 ? (
          categories.map((category: any) => (
            <Category key={category.idCategory} {...category} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default Categories;
