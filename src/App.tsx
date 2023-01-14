import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./components/Categories";
import axios from "axios";
import { CategoriesProps } from "./components/Categories/types";

const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

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
      <p>Select from categories</p>
      {categories.length > 0 ? (
        <Categories categories={categories} />
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}

export default App;
