const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// HTML 폼을 표시할 라우트
router.get('/', (req, res) => {
  // HTML 폼 파일을 클라이언트에 전송
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// POST 요청 처리
router.post('/saveData', (req, res) => {
  const newData = req.body.data;
  const inputdataPath = path.join(__dirname,'..', 'data', 'inputdata.json');

  fs.readFile(inputdataPath, 'utf-8', (readErr, existingData) => {
    if (readErr) {
      console.error('파일 읽기 오류:', readErr);
      res.status(500).send('파일 읽기 오류 발생');
    } else {
      let inputDataArray = [];
      try {
        inputDataArray = JSON.parse(existingData);
      } catch (parseErr) {
        console.error('JSON 파싱 오류:', parseErr);
        res.status(500).send('JSON 파싱 오류 발생');
        return;
      }

      inputDataArray.push(newData);

      fs.writeFile(inputdataPath, JSON.stringify(inputDataArray, null, 2), 'utf-8', (writeErr) => {
        if (writeErr) {
          console.error('파일 쓰기 오류:', writeErr);
          res.status(500).send('파일 쓰기 오류 발생');
        } else {
          console.log('데이터가 성공적으로 파일에 추가되었습니다.');
          res.json({ message: '데이터가 성공적으로 저장되었습니다.' });
        }
      });
    }
  });
});

router.get('/getData', (req, res) => {
  const inputdataPath = path.join(__dirname,'..', 'data', 'inputdata.json');

  fs.readFile(inputdataPath, 'utf-8', (readErr, jsonData) => {
    if (readErr) {
      console.error('파일 읽기 오류:', readErr);
      res.send('파일 읽기 오류 발생');
    } else {
      const data = JSON.parse(jsonData);
      res.json(data)
    }
  });
});

module.exports = router;
