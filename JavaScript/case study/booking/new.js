function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  document.querySelector("#theForm").onsubmit = calculate;
}

function calculate(e) {
  e.preventDefault();

  let start = document.querySelector("#start").value;
  let end = document.querySelector("#end").value;

  let startDate = new Date(start);
  let endDate = new Date(end);

  let result = "";
  let day = 24 * 60 * 60 * 1000;
  // 24：一天有 24 小時
  // 60：每小時有 60 分鐘
  // 60：每分鐘有 60 秒
  // 1000：每秒有 1000 毫秒

  if (startDate <= endDate) {
    let diff = endDate - startDate;
    console.log(diff); //相差毫秒數

    if (diff <= day) {
      interval = `1 day`; // 間隔
    } else {
      interval = Math.round(diff / day) + `1 day`;
    }
    result += `The room has been scheduled starting on<span>${startDate.toLocaleDateString()}</span>and ending on<span>${endDate.toLocaleDateString()}</span>,whichi is a period of<span>${interval}</span>`;
  } else {
    result += `<span>The start date must come before the end date.</span>`;
  }

  document.querySelector("#result").innerHTML = result;
}

window.addEventListener("load", doFirst);
