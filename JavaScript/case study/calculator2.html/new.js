function doFirst() {
  //先跟 HTML 畫面產生關聯，再建事件聆聽功能
  document.querySelector("#theForm").onsubmit = calculator;
  // document.querySelector("#theForm").addEventListener("submit", addTask);
}

function calculator() {
  //   let task = document.querySelector("#task").value;
  let quantity = document.querySelector("#quantity");
  let price = document.querySelector("#price");
  let tax = document.querySelector("#tax");
  let discount = document.querySelector("#discount");

  let total = quantity;

  document.querySelector("#total").innerText = total;
  return false; //不要真的送出去
}
