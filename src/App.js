import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import nanoid from "https://cdn.skypack.dev/nanoid";

function App() {
  const [recipes, setRecipes] = useState([]);
  let [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const APP_ID = "c376c6ad";
  const API_KEY = "57a90b23716e9965600bcb3b1f361b64";
  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch((search = e.target.value));
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          value={search}
          type="text"
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(({ recipe: { label, image, calories, ingredients } }) => (
          <Recipe
            key={label}
            title={label}
            image={image}
            calories={Math.round(calories)}
            ingredients={ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
