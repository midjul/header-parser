const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    userAgent: req.headers["user-agent"],
    language: req.headers["accept-language"]
  });
});
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
