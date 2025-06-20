const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/play', (req, res) => {
  const userMove = req.body.move;
  const moves = ['rock', 'paper', 'scissors'];
  const botMove = moves[Math.floor(Math.random() * 3)];

  let result;
  if (userMove === botMove) {
    result = 'draw';
  } else if (
    (userMove === 'rock' && botMove === 'scissors') ||
    (userMove === 'paper' && botMove === 'rock') ||
    (userMove === 'scissors' && botMove === 'paper')
  ) {
    result = 'win';
  } else {
    result = 'lose';
  }

  res.json({ userMove, botMove, result });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
