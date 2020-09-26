import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Logout = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);

  const handleLogout = () => {
    axios
      .post("/api/user/logout", { withCredentials: true })
      .then(() => {
        setCurrentUser(null);
        sessionStorage.removeItem("user");
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Button id="navbtn" variant="link" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
