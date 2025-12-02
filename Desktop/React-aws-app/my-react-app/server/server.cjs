const express = require("express");
const path = require("path");
const app = express();

const buildPath = path.join(__dirname, "dist");
console.log(buildPath)

// Serve all static files
app.use(express.static(buildPath));

// Serve index.html for any route (SPA support)
app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("React app is running on port " + PORT);
});