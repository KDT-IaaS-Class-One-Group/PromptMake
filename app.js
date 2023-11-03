const express = require('express');
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'));
app.use(express.static('data'));

app.get('/', (req, res) => {
  res.send()
})
app.post('/add', (req, res) => {
  const test = req.body
  fs.writeFile(__dirname, test)
  res.send(test)
})


app.listen(3000, () => {
  console.log("http://localhost:3000/")
})