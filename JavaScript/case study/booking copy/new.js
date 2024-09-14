function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  document.querySelector("#theForm").onsubmit = calculate;
}
function calculate(e) {
  e.preventDefault();

  let start = document.querySelector("#start").vaule;
  let end = document.querySelector("#end").vaule;

  let startDate = new Date(start);
  let endDate = new Date(end);

  let result = ``;
  if (startDate <= endDate) {
  } else {
    result += `開始時間晚於結束時間，請重新選擇`;
  }
}

window.addEventListener("load", doFirst);
