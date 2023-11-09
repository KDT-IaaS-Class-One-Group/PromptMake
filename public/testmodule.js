// JSON 파일 경로

// JSON 파일을 로드하고 데이터를 처리합니다.

export const promptanswerdata = function () {
  const jsonFilePath = 'http://localhost:3322/primary.json';
  const mainprompt = document.getElementById('mainprompt');

  fetch(jsonFilePath)
  .then(response => response.json())
  .then(jsonData => {
      // JSON 데이터에서 프로퍼티 값을 추출하여 HTML에 넣습니다.
      // 상위 데이터 경로 설정
      const mainContent = jsonData.mainContent;

      // 차상위 데이터 경로 설정
      const outputRecords = mainContent.outputRecords
      // 하위 경로 설정
      const answergood = outputRecords[0].answergood
      const answerbad = outputRecords[0].answerbad

      // 슬라이드 안에 메뉴 입력
      mainprompt.innerHTML = `
    <ul>${answergood}</ul><br>
    `;
    })
    .catch(error => {
      console.error('Error loading JSON file:', error);
    });
}