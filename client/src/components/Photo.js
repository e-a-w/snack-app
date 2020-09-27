import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Photo = () => {
  const history = useHistory();

  return (
    <Jumbotron className="home">
      <h1 className="home-title mb-3">Get your Snack on!</h1>
      <Button
        style={{ background: "#4c5638" }}
        onClick={() => history.push(`/about`)}
        variant="primary"
      >
        Learn more about us!
      </Button>
    </Jumbotron>
  );
};

export default Photo;
