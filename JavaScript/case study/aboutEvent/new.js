function doFirst() {
  //先跟 HTML 畫面產生關聯，再建事件聆聽功能
  //   document.querySelector("#theForm").onsubmit = addTask;
  document.querySelector("#theForm").addEventListener("submit", setEvent);
}

function setEvent(e) {
  e.preventDefault(); //preventDefault()  取消預設行為n,
  //   return false; //因為已經引用事件，所以不需要return false取消送出
  let events = ["click", "select", "contextmenu", "change", "input"]; //陣列;
  // events[0]、events[2]、events[3]、events[4]、events[5]

  for (let i = 0; i < events.length; i++) {
    let yourCheck = document.getElementById(events[i]);
    if (yourCheck.checked) {
      document.addEventListener(events[i], report);
    } else {
      document.removeEventListener(events[i], report);
    }
  }
  result = document.getElementById("result"); //result為全域變數
  //   result = document.querySelector("#result");
  result.value = ``;
}
function report(e) {
  result.value += `${e.target.nodeName}:${e.type}\n`; //nodeName標籤名稱
}
window.addEventListener("load", doFirst);
//JS呼叫函數
// 1直接呼叫:drawing()
// 2事件聆聽:theButton.onlick=drawing
//           theButton.addEventListener("click",drawing);
// 3計時器:setInterval(drawing,毫秒)
