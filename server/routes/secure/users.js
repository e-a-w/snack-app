const router = require("express").Router();

// Get Current User
router.get("/api/user", async (req, res) => res.json(req.user));

// Edit Current User
router.patch("/api/user", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["username", "email", "password", "snacks"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: "invalid updates!" });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    //must return full user data
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// Delete Current User
router.delete("/api/user", async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.remove();
    res.clearCookie("jwt");
    res.json({ message: "Account deleted." });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// Logout Current User
router.post("/api/user/logout", async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie("jwt");
    res.json({ message: "logged out!" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
