export function initializeForm() {
  const inputElement = document.getElementById('data');
  inputElement.placeholder = 'Send a Message';
}

export function handleFormSubmit(form) {
  const formData = new FormData(form);
  const data = formData.get('data');
  fetch('/saveData', {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(result => {
      console.log('데이터가 성공적으로 저장되었습니다.', result);
      clearInput(form);
    })
    .catch(error => {
      console.error('오류 발생:', error);
    });
}

function clearInput(form) {
  const inputElement = form.querySelector('#data');
  inputElement.value = ''; // 내용을 지움
}