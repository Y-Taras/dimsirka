/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const buffer = fs.readFileSync('./data.json');
const articleData = JSON.parse(buffer);
const app = express();
app.use(cors());

app.get('/articlesList', (req, res) => {
  if (articleData) {
    setTimeout(() => res.json(articleData.articlesList), Math.floor(Math.random() * 1000));
  } else {
    console.log(404, articleData);
    res.status(404).json({ error: 'articles not found' });
  }
});

app.get('/articles/:id', (req, res) => {
  const article = articleData.articles.find(item => item.articleId === req.params.id)
  if (articleData) {
    setTimeout(() => res.json(article), Math.floor(Math.random() * 1000));
  } else {
    console.log(404, article);
    res.status(404).json({ error: 'articles not found' });
  }
});

console.log(`Starting server on port 3000`);
console.log(`Generating api with posts`);
app.listen(3000);

