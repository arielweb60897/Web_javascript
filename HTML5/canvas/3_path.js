function doFirst() {
  let canvas = document.querySelector("#canvas");
  let context = canvas.getContext("2d");

  context.strokeStyle = "green";
  context.lineWidth = 15;
  context.fillStyle = "lightgreen";

  context.moveTo(100, 100); // 畫筆落點
  context.lineTo(250, 250); // 畫線
  context.lineTo(400, 50);
  context.lineTo(50, 200);

  // context.lineTo(100, 100); // 開始和結束連起來
  context.closePath(); // 封閉路徑，開始和結束連起來

  context.fill(); // 填滿
  context.stroke(); // 描邊、線條
}

window.addEventListener("load", doFirst);
