const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const { DATABASE_URI, environment, PORT } = require("./config/index");

const recipesRouter = require("./routers/recipesRouter.js");
// app.use(express.static(path.join(__dirname, "../client/public/dist")));
app.use(express.json());
app.use(cors({ origin: true }));

app.use("/recipes", recipesRouter);

mongoose.connect(DATABASE_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));
