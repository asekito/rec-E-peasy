const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name cannot be blank"],
  },
  ingredients: [
    {
      ingredient: { type: "String", require: [true, "Must have ingredients"] },
      estimated_amount: String,
      measured_amount: {
        amount: Number,
        unit: String,
      },
    },
  ],
});

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;
