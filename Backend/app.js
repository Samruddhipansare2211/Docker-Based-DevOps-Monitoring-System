const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Backend 🚀");
});

app.get("/metrics", (req, res) => {
  res.send("app_requests_total 1");
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
