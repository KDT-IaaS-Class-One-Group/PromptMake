const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require("path")

// express.json() 미들웨어를 사용하여 JSON 파싱 활성화
app.use(express.json());

// 정적 파일 서빙 설정: 'public' 디렉토리의 파일을 정적 파일로 서빙
app.use(express.static('public'));

app.post('/postData', (req, res) => {
  const data = req.body.data;
  const inputdatapath = path.join(__dirname, "./data/inputdata.json")
  const inputdata = JSON.stringify(data, null, 2)
  fs.writeFileSync(inputdatapath, inputdata, 'utf-8', (err) => {
    if (err) {
      console.error('파일 쓰기 오류:', err);
    } else {
      console.log('데이터가 성공적으로 파일에 쓰였습니다.')
    }
  }
  )
});
// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 실행 중입니다.`);
});

