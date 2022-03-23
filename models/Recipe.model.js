const { Schema, model } = require("mongoose");
const User = require("./User.model");

const recipeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
