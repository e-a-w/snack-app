// require("./db/config");
const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Unauthenticated routes

// Serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Authentication Middleware

// Secure Route

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === "production") {
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
