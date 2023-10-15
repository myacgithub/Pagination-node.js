const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./users');

mongoose.connect('mongodb://localhost/pagination', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

const userModel = require('./users');

app.get('/users', async (req, res) => {
  const { skip, limit, selectionKeys, searchKeys } = req.query;
  console.log(req.query);

  // Ensure skip and limit are valid numbers
  const skipValue = parseInt(skip);
  const limitValue = parseInt(limit);

  


  const query = { "name": { $regex: searchKeys, $options: "i" } }
  const userData=await userModel.find(query).skip(skipValue).limit(limitValue)
 
  res.json(userData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


