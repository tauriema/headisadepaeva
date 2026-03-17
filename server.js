const express = require('express');
const app = express();

// Võimaldab JSON-i päringute kehas / Allow JSON in request bodies
app.use(express.json());

// Peamine marsruut / Main route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Server kuulab pordil 3000 / Server listens on port 3000
app.listen(3000, () => {
  console.log('Server töötab pordil 3000 / Server is live on port 3000');
});
