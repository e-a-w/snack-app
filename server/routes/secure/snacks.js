const router = require("express").Router(),
  axios = require("axios");

// Toggle Saved Snacks for Current User
router.patch("/api/snacks", async (req, res) => {
  let { query } = req.query;
  try {
    if (req.user.snacks.includes(query)) {
      req.user.snacks.pull(query);
    } else {
      req.user.snacks.push(query);
    }
    req.user.save();
    // must send full user data back as response
    res.send(req.user);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// Get Info For All Current User's Snacks
router.get("/api/snacks/:ids", async (req, res) => {
  try {
    if (!req.user.snacks) {
      res.send(404);
    }
    const { ids } = req.params;
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.SPOONACULAR}&ids=${ids}`
    );
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

module.exports = router;
