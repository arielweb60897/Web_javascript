function doFirst() {
  // 先跟 HTML 畫面產生關連
  myMovie = document.querySelector("#myMovie");
  playButton = document.querySelector("#playButton");
  defaultBar = document.querySelector("#defaultBar");
  progress = document.querySelector("#progress");

  // barsize = 635
  // barsize = defaultBar.style.width // 找不到寫在 CSS 檔案內的資料
  barsize = parseInt(getComputedStyle(defaultBar).width);
  // alert(barsize)

  // 再建事件聆聽功能
  playButton.addEventListener("click", playOrPause);
  myMovie.addEventListener("click", playOrPause);
  defaultBar.addEventListener("click", clicked);

  // 全螢幕
  // document.querySelector('#fullButton')
  //         .addEventListener('click',() => myMovie.requestFullscreen())
}
function playOrPause() {
  if (!myMovie.paused && !myMovie.ended) {
    // 影片正在跑
    myMovie.pause();
    playButton.innerText = "play";
  } else {
    myMovie.play();
    playButton.innerText = "pause";
    setInterval(update, 300);
  }
}
function update() {
  if (!myMovie.ended) {
    let size = (barsize / myMovie.duration) * myMovie.currentTime;
    progress.style.width = `${size}px`;
  } else {
    playButton.innerText = "play";
    myMovie.currentTime = 0;
    progress.style.width = `0px`;
  }
}
function clicked() {
  // 物件和螢幕左邊的距離:物件.offsetLeft
  // e.pageX = 點選位置與螢幕左邊的距離
  let mouseX = e.pageX - defaultBar.offsetLeft;
  progress.style.width = `${mouseX}px`;

  //   newTime = 69px / 6.9px/sec(每秒跑 6.9px)
  let newTime = mouseX / (barsize / myMovie.duration);
  myMovie.currentTime = newTime;
}
window.addEventListener("load", doFirst);

// 635px / 92sec ==> 6.9px/sec * 10sec ==> 69px
// barsize / myMovie.duration ==> 6.9px/sec * myMovie.currentTime ==> ?px
