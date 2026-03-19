const express = require("express");
const app = express();

// Võimaldab JSON-i päringute kehas / Allow JSON in request bodies
app.use(express.json());

// Avaleht
app.get("/", (req, res) => {
  res.json({ message: "koduleht" });
});

// Login leht
app.get("/login", (req, res) => {
  res.json({ message: "login" });
});

// Leht kus saab arvustusi vaadata
app.get("/arvustused", (req, res) => {
  res.json({ message: "arvustuste vaatamise leht" });
});

// Leht kus saab arvustusi anda
app.get("/annaarvustus", (req, res) => {
  res.json({ message: "arvustuste andmise leht" });
});

app.get("/reklaamivabariik", (req, res) => {
  res.json({ message: "reklaamide spam" });
});

// Server kuulab pordil 3000 / Server listens on port 3000
app.listen(3000, () => {
  console.log("Server töötab pordil 3000 / Server is live on port 3000");
});
