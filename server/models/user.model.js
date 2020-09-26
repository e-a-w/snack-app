const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
    },
    email: {
      type: email,
      required: true,
      unique: true,
    },

    snacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Snack",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
