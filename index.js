const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

let isActive = true;

// Your frontend calls this to check the status
app.get("/status", (req, res) => {
  res.json({ active: isActive });
});

// You call this to flip it on or off
app.post("/toggle", (req, res) => {
  isActive = !isActive;
  res.json({ active: isActive });
});

// Set it directly: /on or /off
app.get("/on", (req, res) => {
  isActive = true;
  res.json({ active: isActive });
});

app.get("/off", (req, res) => {
  isActive = false;
  res.json({ active: isActive });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
