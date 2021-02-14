const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const postsRoute = require('./routes/posts');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGODB_URI, PORT } = process.env;

// use posts route
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home!');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts!');
});

mongoose.connect(MONGODB_URI, mongooseOptions, () =>
  console.log('connected to DB!')
);
// connect to db
app.listen(PORT);
