const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'PROMPTMAKE')))

app.use('data', router1);

app.listen(3000, function() {
  console.log("http://localhost:3000/")
})