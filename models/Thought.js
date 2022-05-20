const { Schema, model, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
    //   get: (date) => timeSince(date),
      default: Date.now,
      // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reaction: {
      // Array of nested documents created with the reactionSchema
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = Thought;
