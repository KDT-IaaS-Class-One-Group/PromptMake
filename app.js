const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// express.json() 미들웨어를 사용하여 JSON 파싱 활성화
app.use(express.json());

// 정적 파일 서빙 설정: 'public' 디렉토리의 파일을 정적 파일로 서빙
app.use(express.static('public'));

app.post('/postData', (req, res) => {
  const data = req.body.data;
  // 데이터를 사용하거나 처리할 로직 추가
  console.log('POST 요청에 대한 데이터:', data);
  res.send('POST 요청에 대한 응답: 데이터를 수정했습니다.');
});
// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 실행 중입니다.`);
});

