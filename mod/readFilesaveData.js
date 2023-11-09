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

module.exports = { readFilesaveData }