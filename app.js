const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

// HTML 폼을 표시할 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST 요청 처리
app.post('/postData', (req, res) => {
  const data = req.body.data;
  const inputdataPath = path.join(__dirname, 'data', 'inputdata.json');

  // 데이터를 JSON 파일로 저장
  fs.writeFile(inputdataPath, JSON.stringify({ data }), 'utf-8', (err) => {
    if (err) {
      console.error('파일 쓰기 오류:', err);
      res.status(500).send('파일 쓰기 오류 발생');
    } else {
      console.log('데이터가 성공적으로 파일에 쓰였습니다.');
      res.send('데이터가 성공적으로 저장되었습니다.');
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 실행 중입니다.`);
});
