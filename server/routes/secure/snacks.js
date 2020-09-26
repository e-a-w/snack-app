const router = require("express").Router();
// Snack = require("../../db/models/snack");

// Create (Save) New Snack for Current User
router.post("/api/snacks", async (req, res) => {
  try {
    const newSnack = new Snack({ ingredients });
    await newSnack.save();
    req.user.snacks.push(newSnack._id);
    await req.user.save();
    res.status(201).json(newSnack);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// Get All Current User's Snacks
router.get("/api/snacks/:id", async (req, res) => {
  try {
    if (!req.user.snacks) {
      res.send(404);
    }
    res.send(200).json(req.user.snacks);
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
    await Author.findByIdAndUpdate(req.user._id, {
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
