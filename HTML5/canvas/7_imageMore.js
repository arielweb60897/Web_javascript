function doFirst() {
  let canvas = document.querySelector("#canvas");
  // let context = canvas.getContext("2d"); // 區域變數

  // 拿掉 let 變成全域變數
  context = canvas.getContext("2d");

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

  // let pic = new Image();
  // pic.src = "../../images/cityscape.jpg";
  // pic.addEventListener("load", function () {
  //   // context.drawImage(Image, dX, dY, dWidth, dHeight);
  //   context.drawImage(pic, 0, 0, canvas.width, canvas.height);
  // });

  // 1 需要 reload 才會出現第一張圖片
  // let pic2 = new Image();
  // pic2.src = "../../images/Shinnosuke/Shinnosuke9.png";
  // pic2.addEventListener("load", function () {
  //   // context.drawImage(Image, dX, dY, dWidth, dHeight);
  //   context.drawImage(pic2, 0, 0, 300, 300); // 左上
  //   context.drawImage(pic2, 0, 300, 300, 300); // 左下
  //   context.drawImage(pic2, 600, 0, 300, 300); // 右下
  //   context.drawImage(pic2, 600, 300, 300, 300); // 右下
  // });

  // 2
  let pic1 = new Image();
  pic1.src = "../../images/cityscape.jpg";
  pic1.addEventListener("load", loadImage);

  let pic2 = new Image();
  pic2.src = "../../images/Shinnosuke/Shinnosuke9.png";
  pic2.addEventListener("load", loadImage);

  function loadImage() {
    context.globalAlpha = 0.5; // 變透明
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    context.drawImage(pic2, 600, 300, 300, 300);
  }
}
window.addEventListener("load", doFirst);
