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
router.post('/saveData', async (req, res) => {
  const newData = req.body.data;
  const inputdataPath = path.join(__dirname, '..', 'data', 'inputdata.json');
  async function readFilesaveData() { 
    try {
      // 기존 데이터 불러오기
      const existingData = await fs.promises.readFile(inputdataPath, 'utf-8');
      let inputDataArray = JSON.parse(existingData);
  
      // 새 데이터를 기존 데이터에 추가
      inputDataArray.push(newData);
  
      // 데이터를 JSON 파일로 저장
      await fs.promises.writeFile(inputdataPath, JSON.stringify(inputDataArray, null, 2), 'utf-8');
      
      console.log('데이터가 성공적으로 파일에 추가되었습니다.');
      res.json({ message: '데이터가 성공적으로 저장되었습니다.' });
    } catch (error) {
      console.error('오류 발생:', error);
      res.status(500).send('데이터 저장 중 오류 발생');
    }
  }
readFilesaveData();
});

// getData 엔드포인트에서도 async/await를 사용하여 처리
router.get('/getData', async (req, res) => {
  const inputdataPath = path.join(__dirname, '..','data', 'inputdata.json');

  try {
    const jsonData = await fs.promises.readFile(inputdataPath, 'utf-8');
    const data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error('오류 발생:', error);
    res.status(500).send('데이터 가져오기 중 오류 발생');
  }
});

router.get('/propertyData', (req, res) => {
  const inputdataPath = path.join(__dirname, '..','data', 'inputdata.json');

  const propertyData = fs.promises.readFile(inputdataPath, 'utf-8');
  const prodata = JSON.parse(propertyData);
  res.json(prodata);
  
})

module.exports = router;
