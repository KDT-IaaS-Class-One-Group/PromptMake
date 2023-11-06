const express = require('express');
const app = express();
const port = 3002;
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// HTML 폼을 표시할 라우트
app.get('/', (req, res) => {
  // HTML 폼 파일을 클라이언트에 전송
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST 요청 처리
app.post('/postData', (req, res) => {
  const newData = req.body.data;
  console.log(req.body)
  const inputdataPath = path.join(__dirname, 'data', 'inputdata.json');

  // 기존 데이터 불러오기
  fs.readFile(inputdataPath, 'utf-8', (readErr, existingData) => {
    if (readErr) {
      // 파일 읽기 오류 처리
      console.error('파일 읽기 오류:', readErr);
      res.status(500).send('파일 읽기 오류 발생');
    } else {
      let inputDataArray = [];
      try {
        // 기존 데이터를 JSON 형식으로 파싱
        inputDataArray = JSON.parse(existingData);
      } catch (parseErr) {
        // JSON 파싱 오류 처리
        console.error('JSON 파싱 오류:', parseErr);
        res.status(500).send('JSON 파싱 오류 발생');
        return;
      }

      // 새 데이터를 기존 데이터에 추가
      inputDataArray.push(newData);

      // 데이터를 JSON 파일로 저장
      fs.writeFile(inputdataPath, JSON.stringify(inputDataArray, null, 2), 'utf-8', (writeErr) => {
        if (writeErr) {
          // 파일 쓰기 오류 처리
          console.error('파일 쓰기 오류:', writeErr);
          res.status(500).send('파일 쓰기 오류 발생');
        } else {
          console.log('데이터가 성공적으로 파일에 추가되었습니다.');
          res.send('데이터가 성공적으로 저장되었습니다.');
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 실행 중입니다.`);
});
