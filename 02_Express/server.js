const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Dost! Mera Backend Server chal raha hai.");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
