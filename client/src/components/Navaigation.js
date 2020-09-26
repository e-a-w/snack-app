import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import SnackBasket from "../assets/SnackBasket.png";

const Navaigation = () => {
  return (
    <div>
      <Navbar className="justify-content-between ">
        <Navbar.Brand href="./">
          <img src={SnackBasket} alt="Snackbasket" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav.Item>
          <Nav.Item>
            <Button id="navbtn" href="./login" variant="link">
              Log In
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button href="./signup" id="navbtn" variant="outline-info">
              Sign Up
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navaigation;
