function doFirst() {
  // 先跟 HTML 畫面產生關聯
  Image = document.querySelector("#image");
  playButton = document.querySelector("#playButton");
  puseButton = document.querySelector("#puseButton");

  //  再建是建聆聽功能
  playButton.addEventListener("click", playImage);
  puseButton.addEventListener("click", puseImage);
}
