const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const cors = require('cors')
const app = express()
const MONGODB_URI =
  'mongodb+srv://nodetest:ura132445@cluster0-bgxz3.mongodb.net/traine?retryWrites=true&w=majority';

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/signup', authRoutes)

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3100);
  })
  .catch(err => {
    console.log(err);
  });
