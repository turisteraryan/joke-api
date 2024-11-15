const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Array of jokes
const jokes = [
  { id: 1, joke: "I tried starting a hot air balloon business, but it never took off." },
  { id: 2, joke: "What do you call a lazy kangaroo? A pouch potato." },
  // Add more jokes as needed
];

app.use(cors());

app.get('/jokes', (req, res) => {
  res.json(jokes);
});

app.get('/jokes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const joke = jokes.find(joke => joke.id === id);

  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
