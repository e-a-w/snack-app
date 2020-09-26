// require("./db/config");
const express = require("express"),
  path = require("path"),
  passport = require("./middleware"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  openRoutes = require("./routes/open"),
  snackRoutes = require("./routes/secure/snacks"),
  userRoutes = require("./routes/secure/users"),
  app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Unauthenticated routes
app.use(openRoutes);

// Serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Authentication Middleware
app.use(
  passport.authenticate("jwt", {
    session: false,
  })
);

// Secure Route
app.use(userRoutes);
app.use(snackRoutes);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === "production") {
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
