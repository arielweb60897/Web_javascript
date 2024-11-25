function doFirst() {
  // 先跟 HTML 畫面產生關連，再建聆聽功能

  image = document.querySelector("#image");
  image.addEventListener("dragstart", startDrag);
  image.addEventListener("dragend", endDrag);

  rightbox = document.querySelector("#rightbox");

  //   取消預設行為：preventDefault
  //   省略箭頭函數的小括號 ()=>{}
  rightbox.addEventListener("dragenter", (e) => e.preventDefault());
  rightbox.addEventListener("dragover", (e) => e.preventDefault());
  rightbox.addEventListener("drop", dropped);
}
function startDrag() {
  //   let data = `<img src="../../images/Shinnosuke/Shinnosuke2.png" alt="新之助"/>`;
  let data = `<img src=${image.src} alt="${image.alt}}"/>`;

  // e.dataTransfer.setData('圖檔資料型態',data)
  e.dataTransfer.setData("image/png", data);
}
function endDrag() {
  image.style.display = "none";
  image.style.visibility = "hiden";
}
function dropped(e) {
  e.preventDefault();
  rightbox.innerHTML = e.dataTransfer.getData("image/png");
}
window.addEventListener("load", doFirst);

// dragstart拖曳開始
// drag拖曳中
// dragend拖曳結束

// dragenter拖進該範圍
// dragover停在裡面
// dragleave脫離該範圍
// drop放下
