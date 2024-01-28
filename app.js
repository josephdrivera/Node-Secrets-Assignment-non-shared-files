const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;

app.get('/', (req, res) => {
  if (!secretKey) {
    res.status(500).send('Secret key is not set.');
  } else {
    res.send(`The secret key is: ${secretKey}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
