const express = require("express");
const app = express();
const router = express.Router();

const Log = require("../models/foodLog.model");

router.post("/", async (req, res) => {
  try {
    newFood = new Log(req.body).save((err) => {
      if (err) throw err;
      else console.log("New food added to food log");
    });
    return res.status(201).json({ errors: ["none"] });
  } catch (err) {
    console.error("Error with  posting food log request ", err);
    return res
      .status(401)
      .json({ errors: ["Error with post request for food log"] });
  }
});

module.exports = router;
