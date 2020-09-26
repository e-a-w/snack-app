import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Card";
import Footer from "../components/Footer";
import Navaigation from "../components/Navaigation";

const RecipePage = ({ match }) => {
  const { id } = match.params;
  const [recipe, setRecipes] = useState();

  useEffect(() => {
    fetch(`/api/recipe?query=${id}`)
      .then((res) => res.json())
      .then((recipes) => {
        setRecipes(recipes);
        console.log(recipes);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2 class="name">{recipe?.title}</h2>
      <div class="box">
        <div>
          <img alt="Placeholder" src={recipe?.image} />
        </div>
        <div class="recipe">
          <h4>Instructions:</h4>
          <p>{recipe?.instructions}</p>
          <h4>Ingredients:</h4>
          <p>{recipe?.ingredients}</p>
          <h4>Servings</h4>
          <p>{recipe?.servings}</p>
          <h4>Prep Time</h4>
          <p>{recipe?.readyInMinutes}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
