function doFirst(){
    // 跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = validate
}
function validate(e){
    e.preventDefault()
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')
    let gender = document.getElementById('gender')

   
}
window.addEventListener('load',doFirst)