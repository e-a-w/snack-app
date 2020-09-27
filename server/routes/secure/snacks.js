const router = require("express").Router(),
  axios = require("axios"),
  Snack = require("../../db/models/snack.model");

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

// Get Current User's Snack By Id
router.get("/api/snacks/:id", async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (!snack) {
      res.send(404);
    }
    res.send(200).json(snack);
  } catch (error) {
    if (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

// Edit Current User's Snack By ID
router.patch("/api/snacks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["ingredients"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const snack = await Snack.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(snack);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// Delete Current User's Snack By ID
router.delete("/api/snacks/:id", async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { snacks: { $in: [req.params.id] } },
    });
    snack.remove();
    res.json(snack);
  } catch (error) {
    if (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

module.exports = router;
