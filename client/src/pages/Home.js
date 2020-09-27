import React from "react";
import { Container } from "react-bootstrap";
import Photo from "../components/Photo";
import RecipeCards from "../components/RecipeCards";

const Home = () => {
  return (
    <Container fluid style={{ width: "100vw", padding: "0" }}>
      <Photo />
      <RecipeCards />
    </Container>
  );
};

export default Home;
