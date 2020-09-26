import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const ViewSaved = () => {
  const dummyArray = [1, 2, 3, 4, 5, 6];
  const handleRemove = (snackID) => {
    axios
      .delete(`/api/snack/${snackID}`, { withCredentials: true })
      .then((data) => {
        console.log(data);
        window.confirm("Are you sure you want to remove this snack?");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };
  return (
    <>
      {" "}
      <h3 className="mb-3">Saved Snacks:</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {dummyArray.map((snack, i) => {
          return (
            <Card key={i} className="mx-3 mb-3">
              <Card.Header>
                <Card.Title>Snack</Card.Title>
              </Card.Header>
              <Card.Body>
                <h3>Snack</h3>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" onClick={() => handleRemove(i)}>
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
