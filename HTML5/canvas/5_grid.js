function doFirst() {
  let canvas = document.querySelector("#canvas");
  let context = canvas.getContext("2d");

  // 格線
  let gap = 50;
  if (canvas.width > canvas.height) {
    range = canvas.width / gap;
  } else {
    range = canvas.height / gap;
  }

  for (let i = 0; i <= range; i++) {
    let interval = i * gap; // 間隔

    // 水平線
    context.moveTo(0, interval);
    context.lineTo(900, interval);
    // 在水平線的起點 (0, interval) 標註文字，顯示間隔值
    // 假設 interval = 50 時，程式執行 context.fillText(50, 0, 50);文字 "50" 會顯示在座標 (0, 50)。
    // context.fillText(text, x, y, maxWidth);
    context.fillText(interval, 0, interval);

    // 垂直線
    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    // context.fillText(text, x, y, maxWidth);
    context.fillText(interval, interval, 8);
  }
  context.strokeStyle = "rgba(0,0,0,0,3)";
  context.stroke();

  // ===================
}
window.addEventListener("load", doFirst);
