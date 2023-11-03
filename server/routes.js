const express = require('express')
const path = require('path')
const fs = require('fs')

const router1 = express.Router();
// 여기서 입력한 '/'는 서버에서 설정한 엔트리포인트뒤에 달려온다
router1.get('/primary', function (req, res) {
  fs.readFile("./data/primary.json",'utf-8', function(err, data) {
    res.send(data);
  })
})
router1.get('/style', function (req, res) {
  res.send();
})
module.exports = router1;