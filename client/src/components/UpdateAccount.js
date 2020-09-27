import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UpdateAccount = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    axios
      .patch("/api/user", formData, { withCredentials: true })
      .then((data) => {
        setCurrentUser(data);
        alert("Updates successful!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  const handleDelete = () => {
    axios
      .delete("/api/user", { withCredentials: true })
      .then((data) => {
        window.confirm(
          "Are you sure you want to delete your account? This action is PERMANENT and your information cannot be recovered."
        );
        setCurrentUser(null);
        sessionStorage.removeItem("user");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  return (
    <>
      <h3 className="mb-3">Update Information</h3>
      <Form onSubmit={handleSubmit} style={{ width: 300 }}>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
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
        <Form.Group className="d-flex justify-content-flex-start">
          <Button className="mr-3" type="submit">
            Submit Updates
          </Button>
          <Button onClick={handleDelete} variant="danger">
            Delete Account
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default UpdateAccount;
