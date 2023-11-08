const darkmode = document.getElementById('darkmode');
const daymode = document.getElementById('daymode');
const RightBox = document.getElementById('RightBox');

const root = document.getElementById("root");
const hamburgerproperty = document.getElementById('hamburgerproperty');
const userInfo = document.getElementById('userInfo')


// 다크모드 모듈작성
export const darkmodechanger = darkmode.addEventListener('click', function (bgcolor, fontcolor) {
  root.style.backgroundColor = bgcolor;
  RightBox.style.color = fontcolor;
  hamburgerproperty.style.color = fontcolor;
  userInfo.style.color = fontcolor
});
// 데이모드 모듈 작성
export const daymodechanger = daymode.addEventListener('click', function (bgcolor, fontcolor) {
  root.style.backgroundColor = bgcolor;
  RightBox.style.color = fontcolor;
  hamburgerproperty.style.color = fontcolor;
  userInfo.style.color = fontcolor
});
