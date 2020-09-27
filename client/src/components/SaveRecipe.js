import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Button } from "react-bootstrap";

const SaveRecipe = ({ snackID }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const button = useRef(null);
  const style = {
    position: "absolute",
    left: "25px",
    top: "25px",
    background: "#4e9c5b",
  };

  useEffect(() => {
    if (!currentUser) {
      button.current.style.background = "gray";
    } else if (currentUser.snacks.indexOf(snackID) > -1) {
      button.current.style.background = "#4e9c5b";
    } else {
      button.current.style.background = "gray";
    }
  }, [currentUser, snackID]);

  const handleClick = () => {
    if (currentUser) {
      axios
        .patch(`/api/snacks?query=${snackID}`, { withCredentials: true })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.log(error));
    } else {
      alert("Sorry, you must be logged in to save recipes!");
    }
  };

  return (
    <Button ref={button} style={style} onClick={handleClick}>
      Save
    </Button>
  );
};

export default SaveRecipe;
