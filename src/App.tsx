import React, { useState, useEffect } from 'react';
import './App.css';
import Categories from './components/Categories';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryRecipes from './components/CategoryRecipes';
import Meal from './components/Meal';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getMealCategories();
  }, []);

  const getMealCategories = async () => {
    const result = await axios.get(API_URL);
    setCategories(result.data.categories);
  };
  return (
    <div className="app">
      <h1>Tasty Recipes</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Categories categories={categories} />}
          ></Route>
          <Route
            path="/categoryRecipe/:categoryName"
            element={<CategoryRecipes />}
          ></Route>
          <Route path="/meal/:id" element={<Meal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
