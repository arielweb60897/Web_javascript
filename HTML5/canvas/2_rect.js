function doFirst() {
  let canvas = document.querySelector("#canvas");
  let context = canvas.getContext("2d");

  context.fillStyle = "red"; // .fillStyle 設定填滿顏色。
  context.strokeStyle = "rgb(0, 255, 0)"; //.strokeStyle 設定邊框顏色。
  //   context.strokeStyle = "#00ff00";
  context.lineWidth = 15; // 線條厚度，不需寫單位

  // .fillRect() 用於填滿矩形內部。 .fillRect(x, y, width, height)
  // .strokeRect() 用於繪製矩形的輪廓。
  //   context.strokeRect(100, 100, 300, 200);
  context.fillRect(100, 100, 300, 200);
  // clearRect 擦掉位置
  context.clearRect(150, 150, 50, 50);

  context.strokeRect(100, 400, 200, 200);

  context.rect(600, 350, 200, 200);
  // 填滿和描邊排序，是上下圖層的概念
  context.fill(); // 填滿
  context.stroke(); // 描邊

  // 橡皮擦
  //   context.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("load", doFirst);
