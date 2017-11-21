const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    IP: req.ip,
    Host: req.headers["host"],
    userAgent: req.headers["user-agent"],
    language: req.headers["accept-language"]
  });
});
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
