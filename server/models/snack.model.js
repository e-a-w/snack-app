const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const snackSchema = new Schema({
  apiId: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Snack = mongoose.model("Snack", snackSchema);

module.exports = Snack;
