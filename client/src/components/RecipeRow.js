import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeRow = ({ recipes, title }) => {
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <div className="d-flex flex-wrap justify-content-center text-center">
        {recipes?.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              style={{ width: "18rem" }}
              className="mx-5 mt-3 mb-5"
            >
              <Card.Header>
                <Card.Title
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  as={Link}
                  to={`/recipe/${recipe.id}`}
                >
                  {recipe.title}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <img
                  style={{ width: "100%" }}
                  alt="preview"
                  src={recipe.image}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RecipeRow;
