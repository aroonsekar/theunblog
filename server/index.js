const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5700;

app.use(cors());
app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'Welcome to The Unblog', content: 'This is your first post 🎉' },
    { id: 2, title: 'Why I started writing', content: 'Because life is too short not to document it.' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
