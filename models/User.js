const { Schema, model } = require("mongoose");
const reactionSchema = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // Must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: {
      // Array of _id values referencing the Thought model
    },
    friends: {
      // Array of _id values referencing the User model (self-reference)
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;

