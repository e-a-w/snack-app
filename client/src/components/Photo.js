import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";

const Photo = () => {
  return (
    <Jumbotron className="home">
      <h1>Get your Snack On!</h1>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Photo;
