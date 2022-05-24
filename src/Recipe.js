import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((e) => (
          <li>{e.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
