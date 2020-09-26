import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState({});
  const { setCurrentUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/user", formData)
      .then(({ data }) => {
        sessionStorage.setItem("user", data.data);
        setCurrentUser(data.data);
        if (data) {
          history.push("/account");
        }
        alert("Account creation successful!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };
  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1 className="mb-4">Sign up Now</h1>
      <Form onSubmit={handleSubmit} style={{ width: 300 }}>
        <Form.Group>
          <Form.Label htmlFor="userame">Full Name</Form.Label>
          <Form.Control
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            id="username"
            type="text"
            placeholder="Username"
            name="username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            id="password"
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/login">
        Already have an account? Login.
      </Link>
    </Container>
  );
};

export default SignUp;
