import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import { Link } from 'react-router-dom';

const CATEGORY_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const CategoryRecipes = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getCategorieRecipes();
  }, []);

  const getCategorieRecipes = async () => {
    const result = await axios.get(`${CATEGORY_URL}${categoryName}`);
    setRecipes(result.data.meals);
  };

  return (
    <>
      <Link to={`/`}>
        <button className="back-btn">Go back</button>
      </Link>
      <h4>{categoryName} Recipes</h4>
      <div className="recipes">
        {recipes.map((recipe: any) => (
          <Link to={`/meal/${recipe.idMeal}`} key={recipe.idMeal}>
            <div className="recipe">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h1>{recipe.strMeal}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryRecipes;
