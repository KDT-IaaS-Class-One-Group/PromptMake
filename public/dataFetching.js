// dataFetching.js

export function fetchDataAndUpdate() {
  fetch('/getData')
    .then(response => response.json())
    .then(data => {
      const targetElement = document.getElementById('Rightbox_Text');
      targetElement.innerHTML = data.join('<br>');
    })
    .catch(error => {
      console.error('데이터 가져오기 오류:', error);
    });
}
