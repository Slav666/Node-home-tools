const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
