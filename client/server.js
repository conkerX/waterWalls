const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 1992;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('conker');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});