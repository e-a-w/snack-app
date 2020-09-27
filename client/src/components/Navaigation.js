import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import SnackBasket from "../assets/SnackBasket.png";
import Logout from "./Logout";

const Navaigation = () => {
  const { currentUser, setSearchResults } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/recipe/search?query=${searchQuery}`)
      .then(({ data }) => setSearchResults(data))
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };

  return (
    <div>
      <Navbar className="justify-content-between ">
        <Navbar.Brand href="./">
          <img src={SnackBasket} alt="Snackbasket" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Form onSubmit={handleSubmit} inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
          </Nav.Item>
          <Nav.Item>
            {currentUser ? (
              <Logout />
            ) : (
              <Button id="navbtn" href="./login" variant="link">
                Log In
              </Button>
            )}
          </Nav.Item>
          <Nav.Item>
            <Button
              href={currentUser ? "/account" : "/signup"}
              id="navbtn"
              variant="outline-info"
            >
              {currentUser ? "Account" : "Sign Up"}
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navaigation;
