import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import parse from "html-react-parser";
import SaveRecipe from "../components/SaveRecipe";

const RecipePage = ({ match }) => {
  const { id } = match.params;
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(`/api/recipe?query=${id}`)
      .then((res) => res.json())
      .then((recipes) => {
        setRecipe(recipes);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container className="d-flex flex-column align-items-center">
      <h2 className="name">{recipe?.title}</h2>
      <div className="box">
        <SaveRecipe snackID={id} />
        <img className="recipe-img" alt="Placeholder" src={recipe?.image} />
        <div className="recipe">
          <h4>Instructions:</h4>
          <div>{parse(`${recipe?.instructions}`)}</div>
          <h4>Ingredients:</h4>
          <ul>
            {recipe?.extendedIngredients?.map((ing, i) => {
              return <li key={i}>{ing.name}</li>;
            })}
          </ul>
          <h4>Servings</h4>
          <p>{recipe?.servings}</p>
          <h4>Prep Time</h4>
          <p>{recipe?.readyInMinutes}</p>
        </div>
      </div>
    </Container>
  );
};

export default RecipePage;
