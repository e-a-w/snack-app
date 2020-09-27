import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";

const Photo = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Get your Snack On!</h1>
        <p></p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Photo;
