function doFirst() {
  //先跟 HTML 畫面產生關聯，再建事件聆聽功能
  //   document.querySelector("#theForm").onsubmit = addTask;
  document.querySelector("#theForm").addEventListener("submit", addTask);
}

let tasks = []; //全域變數

function addTask() {
  //   let task = document.querySelector("#task").value;
  let task = document.querySelector("#task");
  //   alert(task);
  tasks.push(task.value);

  task.value = "";

  //   console.log(tasks);

  //1
  let feedback = ``;
  feedback += `<ol>`;
  for (let i = 0; i < tasks.length; i++) {
    feedback += `<li>${tasks[i]}</li>`;
  }
  feedback += `</ol>`;

  //2
  //   let feedback = `
  //   <ol>
  //     <li>
  //         ${tasks.join("</li><li>")}
  //     </li>
  //   </ol>
  //   `;//join串接字串，/li結束 li再開始

  document.querySelector("#feedback").innerHTML = feedback;

  //刪除一筆資料
  //   document.querySelector(`ol li`).onclick = removeTask(欲刪除的資料的index值);

  return false; //不要真的送出去
}

// function removeTask(index) {
//   tasks.splice(index, 1);
// }
//window兩種寫法,addEventListener事件聆聽功能 load事件 doFirst處理函數
window.addEventListener("load", doFirst);
// window.onload = doFirst;

//JS呼叫函數
// 1直接呼叫:drawing()
// 2事件聆聽:theButton.onlick=drawing
//           theButton.addEventListener("click",drawing);
// 3計時器:setInterval(drawing,毫秒)
