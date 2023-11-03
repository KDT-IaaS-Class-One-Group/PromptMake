const express = require('express');
const app = express();
const router1 = require("./routes.js")

app.use('/', router1)

app.listen(3000, function() {
  console.log("http://localhost:3000/")
})