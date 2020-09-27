import React, { useEffect, useState } from "react";
import RecipeRow from "./RecipeRow";
import axios from "axios";

const RecipeCards = () => {
  const [rowOne, setRowOne] = useState();
  const [rowTwo, setRowTwo] = useState();
  const [rowThree, setRowThree] = useState();

  useEffect(() => {
    axios
      .get("/api/recipe/random/3/vegetarian")
      .then(({ data }) => {
        setRowOne(data.recipes);
      })
      .catch((err) => console.log(err));
    axios
      .get("/api/recipe/random/3/snacks")
      .then(({ data }) => {
        setRowTwo(data.recipes);
      })
      .catch((err) => console.log(err));
    axios
      .get("/api/recipe/random/3/drinks")
      .then(({ data }) => {
        setRowThree(data.recipes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <RecipeRow recipes={rowOne} title="Vegetarian" />
      <RecipeRow recipes={rowTwo} title="Snacks" />
      <RecipeRow recipes={rowThree} title="Drinks" />
    </>
  );
};

export default RecipeCards;
