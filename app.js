const express = require('express');
const app = express();
const port = 3002;

const routes = require('./server/routes'); // 라우터 모듈 불러오기

app.use(express.static('public'));
app.use(express.static('data'))
app.use(routes); // 라우터 사용

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 실행 중입니다.`);
});
