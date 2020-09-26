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

// hide password & tokens for security
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = author.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userrObject;
};

// generate jwt token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// find author by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("account doesn't exist");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");
  return user;
};

// hash passwords
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
