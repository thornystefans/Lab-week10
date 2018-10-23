const express = require("express");
const path = require("path");
const app = express();
const api = require("./api/index");

// Serve static files
app.use(express.static(path.join(__dirname, "../", "dist")));

// Use the API router
app.use("/api", api);

// Catch all other requests
app.get("*", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

// Prettify the JSON responses (from the API)
app.set("json spaces", 2);

module.exports = app;
