function doFirst() {
  // 跟 HTML 畫面產生關連，再建事件聆聽功能
  document.getElementById("theForm").onsubmit = validate;
}
function validate(e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let gender = document.getElementById("gender");
  //參考【正規表示法表】
  if (/^[A-Za-z]{1,15}$/.test(firstName.value)) {
    alert = "first name pass";
  } else {
    alert = "first name xx";
  }
  if (/^[A-Za-z0-9]{6,12}$/.test(username.value)) {
    alert = "username pass";
  } else {
    alert = "username xx";
  }

  if (/^[A-Za-z0-9_.-]+@[A-Za-z0-9]+\.[A-Za-z]{2,6}$/.test(email.value)) {
    alert(`email pass`);
  } else {
    alert(`email XX`);
  }
}
window.addEventListener("load", doFirst);
