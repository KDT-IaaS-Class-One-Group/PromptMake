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
// 메인프롬프트에 넣을 답변내용
export function mainpromptUpdate() {
  fetch('/primaryData')
    .then(response => response.json())
    .then(data => {
      const leftboxtopContent = document.getElementById('LeftBox_Top');
      leftboxtopContent.innerHTML = data.join('<br>');
      // 작성한 데이터를 한줄씩 적용
    })
    .catch(error => {
      console.error('데이터 가져오기 오류:', error);
    });
}