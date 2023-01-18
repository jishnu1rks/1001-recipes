import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const Meal = () => {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState({});

  useEffect(() => {
    getMealDetails();
  }, []);

  const getMealDetails = async () => {
    const result = await axios.get(`${MEAL_URL}${id}`);
    console.log(result);
    setMealDetails(result.data.meals[0]);
  };

  const ingredientStyles = {
    listStyle: 'none',
  };
  return (
    <div>
      {mealDetails ? (
        <>
          <Link to={`/categoryRecipe/${mealDetails.strCategory}`}>
            <button className="back-btn">Go back</button>
          </Link>
          <h4>{mealDetails.strMeal}</h4>
          <p>
            {mealDetails.strArea}-{mealDetails.strCategory}
          </p>
          <img src={mealDetails.strMealThumb} alt="" width={200} />
          <h4>Instuctions</h4>
          <p>{mealDetails.strInstructions}</p>
          <h4>Ingredients</h4>
          <ul style={ingredientStyles}>
            <li>
              {mealDetails.strIngredient1}-{mealDetails.strMeasure1}
            </li>
            <li>
              {mealDetails.strIngredient2}-{mealDetails.strMeasure2}
            </li>
            <li>
              {mealDetails.strIngredient3}-{mealDetails.strMeasure3}
            </li>
            <li>
              {mealDetails.strIngredient4}-{mealDetails.strMeasure4}
            </li>
          </ul>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Meal;
