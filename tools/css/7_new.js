function doFirst(){
    // 先跟 HTML 畫面產生關連
    image = document.querySelector('#image')
    playButton = document.querySelector('#playButton')
    pauseButton = document.querySelector('#pauseButton')

    image.style.animationPlayState = 'paused'

    // 再建事件聆聽功能
    playButton.addEventListener('click',playImage)
    pauseButton.addEventListener('click',pauseImage)
}
function playImage(){
    image.style.animationPlayState = 'running'
}
function pauseImage(){
    image.style.animationPlayState = 'paused'
}
window.addEventListener('load',doFirst)