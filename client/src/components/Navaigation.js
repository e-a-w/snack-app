import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SnackBasket from "../assets/SnackBasket.png";
import Logout from "./Logout";

const Navaigation = () => {
  const history = useHistory();
  const { currentUser, setSearchResults } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/recipe/search?query=${searchQuery}`)
      .then(({ data }) => {
        setSearchResults(data.results);
        history.push("/search");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };

  return (
    <div>
      <Navbar className="justify-content-between ">
        <Navbar.Brand href="/">
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
              <Button
                id="navbtn"
                onClick={() => history.push("/login")}
                variant="link"
              >
                Log In
              </Button>
            )}
          </Nav.Item>
          <Nav.Item>
            <Button
              onClick={() => {
                currentUser
                  ? history.push("/account")
                  : history.push("/signup");
              }}
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
