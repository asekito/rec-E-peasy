const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client/public/dist")));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));
