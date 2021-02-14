const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// don't need to use '/posts', that is taken care of in app.js
router.get('/', (req, res) => {
  res.send('We are on posts!');
});

router.post('/', (req, res) => {
  console.log('req.body', req.body);
});
module.exports = router;
