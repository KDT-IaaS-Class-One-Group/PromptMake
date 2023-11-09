// 데이터를 json에 저장하는 형식
export function handleFormSubmit(form) {
  // Form안에 있는 데이터를 활용
  const formData = new FormData(form); //FormData 객체 사용
  const data = formData.get('data'); //'data'필드의 값을 가져옴
  // fetch함수를 실행
  fetch('/saveData', {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      'Content-Type': 'application/json'
    }
    // fetch를 통하여 데이터를 post방식으로 전송
  })
    .then(response => response.json())
    .then(result => {
      console.log('데이터가 성공적으로 저장되었습니다.', result);
      fetchDataAndUpdate();
      // 위와같이 함수를 then에 넣어 사용하는 이유는 저장 후 데이터를 바로 가져오기 위함
      clearInput(form);
      // input안에 value를 빈칸으로 만듬

      promptanswerdata();
    })
    .catch(error => {
      console.error('오류 발생:', error);
    });
}

function clearInput(form) {
  const inputElement = form.querySelector('#data');
  inputElement.value = ''; // 내용을 지움
}

// json데이터를 가져와 Rightbox_Text에 넣는 모듈
export function fetchDataAndUpdate() {
  fetch('/getData')
    .then(response => response.json())
    .then(data => {
      const targetElement = document.getElementById('Rightbox_Text');
      targetElement.innerHTML = data.join('<br>');
      // 작성한 데이터를 한줄씩 적용
    })
    .catch(error => {
      console.error('데이터 가져오기 오류:', error);
    });
}

export const promptanswerdata = function () {
  const jsonFilePath = 'http://localhost:3322/primary.json';
  const answerbox = document.getElementById('answerbox');

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
      
      addNewElement(answergood);

    })
    .catch(error => {
      console.error('Error loading JSON file:', error);
    });
}

function addNewElement(element) {
  // 새로운 div 요소 생성
  const newDiv = document.createElement('div');
  
  // 요소에 텍스트나 내용 추가
  newDiv.textContent = element

  // 생성한 요소를 컨테이너에 추가
  answerbox.appendChild(newDiv);
}