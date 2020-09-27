import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const SearchResults = () => {
  const { searchResults } = useContext(AppContext);

  return (
    <Container>
      <h1>Search Results:</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {searchResults?.map((result) => {
          return (
            <Card
              className="mx-3 mt-5 text-center"
              style={{ maxWidth: "400px" }}
              key={Math.random()}
            >
              <Card.Header>
                <Card.Title
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  as={Link}
                  to={`/recipe/${result.id}`}
                >
                  {result.title}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <img
                  style={{ width: "100%" }}
                  alt="preview"
                  src={result.image}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default SearchResults;
