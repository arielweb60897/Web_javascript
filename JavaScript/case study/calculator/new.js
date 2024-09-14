function doFirst() {
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  document.querySelector("#theForm").onsubmit = calculate;
  // document.querySelector('#theForm').addEventListener('submit', addTask)
  //上方為 W3C 推薦公式，但是有 BAG 過一陣子要重整才有反應
}

function calculate() {
  let quantity = document.querySelector("#quantity").value; //選取quantity中的value值
  let price = document.querySelector("#price").value;
  let tax = document.querySelector("#tax").value;
  let discount = document.querySelector("#discount").value;

  let total = quantity * price;

  tax = tax / 100; // tax /= 100
  tax++; //tax=tax+1;tax+=1;tax本身加一 ex:tax=0.05 tax++(0.05+1)= 1.05

  total = total * tax; // total *= tax

  total = total - discount; //   total -= discount;
  document.querySelector("#total").innerText = total.toFixed(2); //toFixed(2)小數點後兩位
  return false; //阻止資料傳送出去
}

window.addEventListener("load", doFirst);
