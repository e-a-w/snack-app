import React, { useState } from "react";
import UpdateAccount from "../components/UpdateAccount";
import ViewSaved from "../components/ViewSaved";
import { Container, Button } from "react-bootstrap";

const Account = () => {
  const [view, setView] = useState(true);

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <div className="mb-5 text-center">
        <h1 className="mb-3">Your Account</h1>
        {
          <Button
            variant="secondary"
            style={{ background: "#4c5638" }}
            onClick={() => setView(!view)}
          >
            {view ? "View Saved Snacks" : "Update Info"}
          </Button>
        }
      </div>
      {view ? <UpdateAccount /> : <ViewSaved />}
    </Container>
  );
};

export default Account;
