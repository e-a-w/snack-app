import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewSaved = () => {
  const { currentUser } = useContext(AppContext);
  const [snackIds, setSnackIds] = useState(currentUser?.snacks?.join());
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/snacks/${snackIds}`, { withCredentials: true })
      .then(({ data }) => {
        setSnacks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (snackID) => {
    window.confirm("Are you sure you want to remove this snack?");
    axios
      .patch(`/api/snacks?query=${snackID}`, { withCredentials: true })
      .then(({ data }) => {
        alert("Snack removed!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {" "}
      <h3 className="mb-3">Saved Snacks:</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {currentUser &&
          snacks?.map((snack) => {
            return (
              <Card
                style={{ maxWidth: "300px" }}
                key={snack.id}
                className="mx-3 mb-3"
              >
                <Card.Header className="text-center">
                  <Card.Title as={Link} to={`/recipe/${snack.id}`}>
                    {snack.title}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <img
                    style={{ width: "100%" }}
                    alt="snack-img"
                    src={snack.image}
                  />
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(snack.id)}
                  >
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default ViewSaved;
