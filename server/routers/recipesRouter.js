const express = require("express");
const app = express();
const router = express.Router();

const Recipe = require("../models/recipes.model");

router.post("/", async (req, res) => {
  try {
    // const doc = new Recipe(req.body);
    const newRecipe = new Recipe(req.body).save((err) => {
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

// [ ] Check if recipe already exists and send to client side to make sure they want to add it again

module.exports = router;
