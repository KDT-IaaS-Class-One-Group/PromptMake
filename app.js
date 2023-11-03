const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.static('public'));

// app.use('/static', express.static('public'));

app.get('/', (req, res)=> {
  fs.readFile('data/primary.json', (err,data) => {
    res.send(data)
  })
})

app.listen(3000, ()=> {
  console.log("http://localhost:3000/")
})