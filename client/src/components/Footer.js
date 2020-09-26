import React from "react";
import "../App.css";
import SnackBasket from "../assets/SnackBasket.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {}
          <div className="col">
            <a href={`/`}>
              <img className="logo" width="150px" src={SnackBasket} />{" "}
            </a>
            <p>
              <em> Get your Snack on!</em>{" "}
            </p>
            <ul className="list-unstyled"></ul>
            <li></li>
            <li></li>
            <li></li>
          </div>
          {}
          <div className="col">
            <h4>Menu</h4>
            <ul className="list-unstyled"></ul>
            <li className="brightblue">Random Recipe</li>
            <li href="/" className="brightblue">
              Add This
            </li>
            <li href="/AboutUs" className="brightblue">
              Add this
            </li>
          </div>
          {}
          <div className="col">
            <h4>Follow us:</h4>
            <ul className="list-unstyled"></ul>
            <a href="https://www.facebook.com/wyncode/">
              <li className="brightblue">Facebook</li>
            </a>
            <a href="https://www.instagram.com/wyncode">
              <li className="brightblue">Instagram</li>
            </a>
            <a href="https://twitter.com/wyncode">
              <li className="brightblue">Twitter</li>
            </a>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footer;
