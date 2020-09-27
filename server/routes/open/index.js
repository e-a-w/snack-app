const router = require("express").Router(),
  jwt = require("jsonwebtoken"),
  User = require("../../db/models/user.model"),
  axios = require("axios");

// Get Random Recipe
router.get("/api/recipe/random", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR}`
    );
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: error.toString() });
    }
  }
});

// Get Multiple Random Recipes
router.get("/api/recipe/random/:number/:type", async (req, res) => {
  try {
    const { number, type } = req.params;
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR}&number=${number}&tags=${type}`
    );
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: error.toString() });
    }
  }
});

// Search Recipes
router.post("/api/recipe/search", async (req, res) => {
  try {
    const { query } = req.query;
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR}&query=${query}`
    );
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

// Get Recipe by ID
router.get("/api/recipe", async (req, res) => {
  try {
    const { query } = req.query;
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${query}/information?apiKey=${process.env.SPOONACULAR}&query=${query}`
    );
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

// Create New User (Register)
router.post("/api/user", async (req, res) => {
  const { username, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) res.status(409).send("that email has already been used");
  try {
    user = new User({
      username,
      email,
      password,
    });
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

// Login
router.post("/api/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
