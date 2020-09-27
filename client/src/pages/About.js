import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <Jumbotron className="mt-5" style={{ padding: "30px" }}>
        <h5 className="mb-3">About the App</h5>
        <p>
          Snack Basket is an app where you can search for and save recipes! Just
          type your search into the top right searchbar, or click on the Random
          Recipe link in our footer to get started. If you want to save your
          recipes, creating an account is as easy as registering with your
          username and email!
        </p>
        <h5 className="mt-5 mb-3">About Us</h5>
        <p>
          We are three developers who took on the challenge of building this app
          for the Shellhacks 2020 hackathon! Our snack data is courtesy of the{" "}
          <a
            href="https://spoonacular.com/food-api/"
            rel="noopener no referrer"
            target="_blank"
          >
            Spoonacular API
          </a>
          .
        </p>
        <p>
          You can check out the project repository on GitHub{" "}
          <a
            rel="noopener no referrer"
            target="_blank"
            href="https://github.com/e-a-w/snack-basket"
          >
            here
          </a>
          .
        </p>
      </Jumbotron>
    </Container>
  );
};

export default About;
