const express = require("express");
const app = express();
const router = express.Router();

const Recipe = require("../models/recipes.model");

const raw = {
  name: "Lumpia",
  ingredients: [
    {
      ingredient: "Pork",
      measured_amount: {
        amount: 10,
        unit: "ounce",
      },
    },
  ],
};

router.post("/", async (req, res) => {
  try {
    // const doc = new Recipe(req.body);
    const newRecipe = new Recipe(raw).save((err) => {
      if (err) throw err;
      else console.log("Recipe added");
    });
    return res.status(201).json({ errors: ["none"] });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: ["Error with post request for recipes"] });
  }
});

module.exports = router;
