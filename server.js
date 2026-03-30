const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const frontendPath = path.join(__dirname, 'frontend', 'frontend', 'dist');

app.use(express.static(frontendPath));

// Login leht
app.get('/login', (req, res) => {
  res.json({ message: 'login' });
});

// Leht kus saab arvustusi vaadata
app.get('/arvustused', (req, res) => {
  res.json({ message: 'arvustuste vaatamise leht' });
});

// Leht kus saab arvustusi anda
app.get('/annaarvustus', (req, res) => {
  res.json({ message: 'arvustuste andmise leht' });
});

app.get('/reklaamivabariik', (req, res) => {
  res.json({ message: 'reklaamide spam' });
});

// Frontend rakendus
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server töötab pordil ${PORT}`);
});