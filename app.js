require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/health', (req, res) => {
  res.send({ status: 'ok' });
});

console.log('Starting server...');

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
